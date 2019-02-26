object GitDoNotIgnore {
    fun getDoNotIgnoreString(filePath: String): String {

        val folders = filePath.split("/")
        val segments = mutableListOf<String>()
        for (i in folders.indices) {
            segments.add(getFromZeroTo(i, folders))
        }

        val sb = StringBuilder()

        // looping through segments
        for (segment in segments.withIndex()) {

            if (segment.index != (segments.size - 1)) {
                // not last item
                sb.append("!${segment.value}/").append("\n")
                sb.append("${segment.value}/*").append("\n")
            } else {
                // last item
                sb.append("!${segment.value}").append("\n")
            }
        }

        return sb.toString()

    }

    private fun getFromZeroTo(i: Int, folders: List<String>): String {
        val sb = StringBuilder()
        for (x in 0..i) {
            sb.append(folders[x]).append("/")
        }
        return sb.substring(0, sb.length - 1)
    }
}