import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    console.log("Hello World");
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
