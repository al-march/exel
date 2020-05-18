import "./module";
import "./scss/main.scss"


async function start () {
  return await Promise.resolve('async worked!')
}

start().then(res => console.log(res))