# git-do-not-ignore
A simple console application to generate .gitignore rule to **not to ignore** a file

### What?

Normally `.gitignore` files are used to ignore files from `git` indexing. 
Sometimes we have to *ignore all files except one or more files*, and writing rule for it is little bit hard.

For example, if we want to skip all files in a `git` project, but not `a.txt` which is located in `aDir/anotherDir/someOtherDir/aDir/bDir/cDir`.
Then, our `.gitignore` will be something like this

```
# Skip all files
*

# But not `aDir/anotherDir/someOtherDir/aDir/bDir/cDir/a.txt`
!aDir/
aDir/*
!aDir/anotherDir/
aDir/anotherDir/*
!aDir/anotherDir/someOtherDir/
aDir/anotherDir/someOtherDir/*
!aDir/anotherDir/someOtherDir/aDir/
aDir/anotherDir/someOtherDir/aDir/*
!aDir/anotherDir/someOtherDir/aDir/bDir/
aDir/anotherDir/someOtherDir/aDir/bDir/*
!aDir/anotherDir/someOtherDir/aDir/bDir/cDir/
aDir/anotherDir/someOtherDir/aDir/bDir/cDir/*
!aDir/anotherDir/someOtherDir/aDir/bDir/cDir/a.txt
```

The above given `.gitignore` file will skip all dirs and files except `!aDir/anotherDir/someOtherDir/aDir/bDir/cDir/a.txt`

### Usage

Download [download.jar](git-do-not-ignore.jar) , then execute below command

```console
java -jar /path/to/git-do-not-ignore.jar "/path/of/the/file"
```

### Example

```console
java -jar git-do-not-ignore.jar "aDir/anotherDir/someOtherDir/aDir/bDir/cDir/a.txt"
```

### Author

theapache64