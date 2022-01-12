import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')
    core.debug("Hello World.")
    if (core.isDebug()) {
      core.debug("Hello World.")
      core.debug(`Miliseconds: ${ms}`)
    }
    console.log("Hello World");
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
core.debug("Hello World.")
core.debug("::debug:: Hello World....")
console.log("::debug:: Hello World.........")