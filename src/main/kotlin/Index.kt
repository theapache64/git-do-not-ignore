import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlinx.html.js.onKeyDownFunction
import kotlinx.html.js.onKeyUpFunction
import org.w3c.dom.DocumentReadyState
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.Event
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.browser.window

fun main() {


    val containerDiv = document.create.div {
        // container
        div("container") {

            // heading
            h1 {
                +"GitDoNotIgnore"
            }

            br()

            // input
            div("row") {
                div("col-md-12") {
                    // input
                    label {
                        htmlFor = "iFilePath"
                        +"File path"
                    }

                    input(
                        type = InputType.text,
                        classes = "form-control"
                    ) {
                        id = "iFilePath"
                        value = "aDir/anotherDir/someOtherDir/aDir/bDir/cDir/a.txt"
                        placeholder = "Paste your full file path here"
                        onKeyUpFunction = {
                            genOutput((it.target as HTMLInputElement).value)
                        }
                    }

                }
            }

            br()

            // result
            div("row") {
                div("col-md-12") {
                    label {
                        htmlFor = "taOutput"
                        +"Output"
                    }

                    textArea(classes = "form-control") {
                        id = "taOutput"
                        placeholder = "Output will appear here"
                        disabled = true
                        rows = "20"
                    }
                }
            }
        }
    }

    document.getElementsByTagName("body")[0]!!.appendChild(containerDiv)

    document.addEventListener("DOMContentLoaded", {
        val i = document.getElementById("iFilePath") as HTMLInputElement
        genOutput(i.value)
    })
}

private fun genOutput(input: String) {

    val taOutput = document.getElementById("taOutput") as HTMLElement

    if (input.isNotEmpty()) {
        val output = GitDoNotIgnore.getDoNotIgnoreString(input)
        taOutput.innerText = output
    } else {
        taOutput.innerText = ""
    }
}

