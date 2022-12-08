#!/bin/bash
ping -c 6 $1 >> /home/eris/server-ceres/log/logPing/$1logping.log
exit