#!/bin/bash
pingfunction(){
   ping $1 >> $1log.txt
   
}
pingfunction