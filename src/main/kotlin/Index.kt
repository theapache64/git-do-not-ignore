import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlinx.html.js.onKeyDownFunction
import kotlinx.html.js.onKeyUpFunction
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement
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
                        placeholder = "Paste your full file path here"
                        onKeyUpFunction = {
                            val taOutput = document.getElementById("taOutput") as HTMLElement
                            val input = (it.target as HTMLInputElement).value
                            if (input.isNotEmpty()) {
                                val output = GitDoNotIgnore.getDoNotIgnoreString(input)
                                taOutput.innerText = output
                            } else {
                                taOutput.innerText = ""
                            }
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
}

