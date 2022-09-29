/**
 * The program finds mean and median
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-9-29
 */

// get arguments
//
import { readFileSync } from 'fs';
//
// print process.argv

function meanFunction (arrayIntegers: number) {
        let total = 0
        let mean = 0
        for (const counter = 0; counter < arrayIntegers.length; counter++) {
                total = total + arrrayIntegers[counter]
        }
        let length = arrayIntegers.length
        if (length > 0) {
                mean = total / length
        }
        return mean
}
function medianFunction (arrayIntegers: number) {
        let returnValue = 0

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val)
})


const file = readFileSync(process.argv[2], 'utf8')

const newArray = file.split(/\r?\n/)

console.log('Calculating...')
const mean = mean(newArray)
const median = median(newArray)
