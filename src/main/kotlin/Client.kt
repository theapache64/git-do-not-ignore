import kotlinx.browser.document
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlinx.html.js.onKeyUpFunction
import org.w3c.dom.HTMLTextAreaElement
import org.w3c.dom.get

fun main() {

    val containerDiv = document.create.div {
        // container
        div("container") {

            // heading
            h1 {
                +"✏️ GitDoNotIgnore"
            }

            br()

            // input
            div("row") {
                div("col-md-12") {
                    // input
                    label {
                        htmlFor = "iFilePath"
                        +"🗄 File paths"
                    }

                    textArea(
                        classes = "form-control"
                    ) {
                        id = "iFilePath"
                        placeholder = "Paste your full file paths here"
                        onKeyUpFunction = {
                            genOutput((it.target as HTMLTextAreaElement).value)
                        }
                        +"""
                            aDir/anotherDir/someOtherDir/aDir/bDir/cDir/a.txt
                            aDir/anotherDir/someOtherDir/aDir/bDir/b.txt
                        """.trimIndent()
                    }

                }
            }

            br()

            // result
            div("row") {
                div("col-md-12") {
                    label {
                        htmlFor = "taOutput"
                        +"🖥 Output"
                    }

                    textArea(classes = "form-control") {
                        id = "taOutput"
                        placeholder = "Output will appear here"
                        rows = "20"
                    }
                }
            }
        }
    }

    document.getElementsByTagName("body")[0]!!.appendChild(containerDiv)

    document.addEventListener("DOMContentLoaded", {
        val i = document.getElementById("iFilePath") as HTMLTextAreaElement
        genOutput(i.value.trim())
    })
}

private fun genOutput(filePaths: String) {
    val taOutput = document.getElementById("taOutput") as HTMLTextAreaElement
    if (filePaths.isNotBlank()) {
        val output = StringBuilder()
        val filePathArr = filePaths.split("\n")
        for (filePath in filePathArr) {
            output.append(GitDoNotIgnore.getDoNotIgnoreString(filePath)).append("\n")
        }
        taOutput.value = output
            .split("\n")
            .filter { it.isNotBlank() }
            .toSet()
            .sortedBy {
                if (it.contains(".")) {
                    val endIndex = it.lastIndexOf('/') + 1
                    if (it.length >= endIndex) {
                        it.substring(0, endIndex).length
                    } else {
                        it.length
                    }
                } else {
                    it.length
                }
            }
            .joinToString(separator = "\n")
    } else {
        taOutput.value = ""
    }
}