import defu from 'defu'

console.log(defu({ plugins: ['local 1', 'local 2'] }, { plugins: ['inherited 1', 'inherited 2'] }))
