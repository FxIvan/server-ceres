#!/bin/bash
echo $1
ping $1 >> pinglog.txt
exit