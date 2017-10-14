#!/usr/bin/env python3
import os
import subprocess

def js(argument=None):
    os.chdir(os.path.abspath('.'))
    FileList = [i for i in os.listdir('.') if '.java' in i]
    if not argument:
        delclass(FileList)
        recompile([i for i in os.listdir('.') if '.java' in i])
        print("[+] Class removed and recompiled")

    elif argument:
        delArg = argument
        if delArg.endswith('.'):
            delArg = delArg + 'class'
        elif not delArg.endswith('.class'):
            delArg = delArg + '.class'

        delclass(delArg)


        compileArg = argument
        if compileArg.endswith('.'):
            compileArg = compileArg + 'java'
        elif not compileArg.endswith('java'):
            compileArg = compileArg + '.java'

        recompile(compileArg)

        executeArg = argument
        if executeArg.endswith('.'):
            executeArg = executeArg.replace('.','')
        elif executeArg.endswith('.java'):
            executeArg = executeArg.replace('.java','')
        execute(executeArg)

def delclass(flist):
    if isinstance(flist,list):
    # to check if it is a list or a single file
        for i in flist:
            if i.endswith('.class'):
                print("[+] %s removed" % i)
                os.remove(i)
    else:
        for i in os.listdir('.'):
            if i.startswith(flist[:flist.index('.')]) and i.endswith('.class'):
                os.remove(i)
                print("[+] class found and removed")

def recompile(flist):
    if isinstance(flist,list): # If the flist is a list
        for i in flist:
            p = subprocess.Popen(["javac",i],stderr=subprocess.PIPE)
            error = p.communicate()
            # uses the subprocess to call the system commands
            if len(error[1]) == 0:
            # os.system('javac %s' % i)
                print("[+] Compiled %s" % i)
            else:
                print("[!] Error At %s" % i)
                print("===================")
                print(error[1].decode('utf-8'))
                # Error[1] needs to be decoded with utf8 
                # since it is a byte 'literal' string object
                print("===================")

    else: # If flist is just a variable
        p = subprocess.Popen(["javac", flist], stderr=subprocess.PIPE)
        error = p.communicate()
        if len(error[1]) == 0:
        # os.system('javac %s' % flist)
            print("[+] Compiled %s" % flist)
        else:
            print("[!] Error At %s" % flist)
            print("===================")
            print(error[1].decode('utf-8'))
            print("===================")
            exit()

def execute(file):
    """file needs to be the java class file to execute"""
    print("[+] Executing ... \n========================================")
    os.system("java %s" % file)


if __name__ == "__main__":
    import sys
    try:
        if '-h' in sys.argv:
            print("""
Usage

    js (file)
        ----
        Optional

    : js

       If called WITHOUT file argument will remove all .class and recompile every java file inside the current directory

    : js file.java

       If called WITH file argument, it will remove the respective compiled .class file, recompile the file argument and execute it.
    """)
        elif len(sys.argv) == 2:
            js(sys.argv[1])
        else:
            js()
    except KeyboardInterrupt:
        print("[!] Terminating")
