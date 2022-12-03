#!/bin/bash
testfunction(){
   ping $1 >> $1log.txt
}
testfunction