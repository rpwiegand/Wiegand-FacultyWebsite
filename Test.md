# CSCI 210 Encoder/Decoder Final Assignment

I wrote this program that has an encoder and a decoder.  It's broken, and it makes me sad.  Please:
    * Clone it to your local area on Hopper
    * Fix it
    * Run it
    * Redirect *just the last line* to a file
    * Copy that file to your local computer
    * Attach that file to the BlackBoard assignment

## Cloning a Repo from a Local Machine
All semester you've been cloning repositories from GitHub.  Did you know that you can clone from a local computer to another spot on that computer?  For example, once you've found *this* project, which is a local git repo, you can clone it to your local area.  First, change to your home directory (easiest thing, just type: cd), then:
```
git clone /usr/share/csci210stuff/CryptoTest 
```


## Fixing the Code
You can build the code using *make*.  Then run the program StudentEncoderProgram.  You will notice that it does not work correctly (this will be obvious).  You'll need to fix it to continue.  The Makefile is instrumented to allow you to use gdb, but you can do whatever you like to find the error.  Note that though the main code is in StudentEncorderProgram.cc, that code relies on another source file, SupportRoutines.cc.  So the error may be in either place.  There is only one error, and it is obvious.


## Running the Code
Once you are able to run the code correctly, you will notice it outputs several lines.  You *only need the last line*.  If only there were a convenient command to get just the last line of output ... (hint: Week 12 notes in BlackBoard). Then you will want to *redirect* that line into a file.  You don't want to copy and paste because the encryption may produce strange, hidden characters.  You need a file.


## Copy the File to Your Local Machine
You need to get that output file to your local computer.  Don't just copy and paste into the BlackBoard text fields.  Not only are strange hidden characters possible, but we don't know how BlackBoard converts those.  So you'll need to perform a remote copy.
   * Windows:  WinSCP is installed on the THUR 303 machines
   * Windows:  pscp is installed with the *full* PuTty install
   * All OSs:  Filezilla
   * MacOS/Linux: Terminal and scp

Ask me for help if you cannot copy the file.  In the worst case, submit the name of your output file in your Hopper home directory (and location if it isn't directly in that home directory) on BlackBoard.  You'll lose a couple of points, but nothing significant.
