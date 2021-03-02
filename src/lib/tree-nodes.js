/**
 * tree nodes: @williamjiang/frontmatter
 * gatsby tree scafolders accordion.
 */
// node.parent.getRelativePath, patch: ignore '.history' folder
export function getAllPathFiles(edges) {
  return edges.map(({ node }) => node.fields.slug)
}

// /env/travis-ci/, /backend/request/, /courses/node-code-quality/
export function parsePathFiles(files = []) {
  const menu = []

  files.forEach(str => {
    const ary = str.replace(/^\//, '').replace(/\/$/, '').split('/')
    const file = ary.pop()
    const len = ary.length

    if (len === 0) {
      menu.push(file)
      return
    }
    let tempClose = new Array(len)
    for (let idx = 0; idx < len; idx += 1) {
      if (idx === 0) {
        const indx = menu.findIndex(tt => Object.keys(tt)[0] === ary[0])
        if (indx === -1) {
          menu.push({ [ary[0]]: [] })
          tempClose[idx] = menu[menu.length - 1]
        } else {
          tempClose[idx] = menu[indx]
        }
        if (len === 1) {
          tempClose[0][ary[idx]].push(file)
        }
      } else {
        const prevKey = Object.keys(tempClose[idx - 1])[0]
        let exist = false
        const dary = tempClose[idx - 2] || tempClose[0]

        if (dary) {
          Object.values(dary)[0].forEach(obj => {
            if (typeof obj === 'object' && Object.keys(obj)[0] === ary[idx]) {
              exist = true
            }
          })
        }

        // if exists, refs to it; if not exist, create it.
        if (!exist) {
          tempClose[idx - 1][prevKey].push({ [ary[idx]]: [] })
        }

        tempClose[idx] = tempClose[idx - 1][prevKey].find(obj => Object.keys(obj)[0] === ary[idx])

        if (len === idx + 1) {
          tempClose[idx][ary[idx]].push(file)
        }
      }
    }

    tempClose = []
  })

  return menu
}

// [{backend: 14}, {bigdata: 21}, {bigdata2: 18},...]
export function getDirTotal(tree) {
  const initAry = tree
    .filter(item => typeof item === 'object')
    .reduce((acc, item) => [...acc, { [Object.keys(item)[0]]: 0 }], [])

  return tree
    .filter(item => typeof item === 'object')
    .reduce((acc, item, idx) => {
      const key = Object.keys(item)[0]
      acc[idx][key] = item[key].length
      return [...acc]
    }, initAry)
}

// elastic-stack: Elastic Stack
export function setTitle(fname) {
  return fname
    .split('-')
    .map(str => str.charAt(0).toUpperCase() + str.slice(1))
    .join(' ')
}

// microservices -> Microservices
export function setDir(dir) {
  return dir.charAt(0).toUpperCase() + dir.slice(1)
}

// {'misc': false, 'poc': false}
export function initNodesKeys(nodes) {
  return nodes.reduce((acc, node) => ({ ...acc, [Object.keys(node)[0]]: false }), {})
}
