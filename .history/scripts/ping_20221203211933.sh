#!/bin/bash
ping $1 >> /home/eris/server-ceres/log/logPing/$1pinglog.txt & pidsave=$! sleep 10;kill $pidsave
exit