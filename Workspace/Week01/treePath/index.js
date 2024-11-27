const datas = [
    {
        id: 1,
        name: "nam",
        top: 0
    },
    {
        id: 2,
        name: "phuong",
        top: 1
    },
    {
        id: 3,
        name: "thuc",
        top: 2
    },
    {
        id: 4,
        name: "long",
        top: 1
    },
    {
        id: 5,
        name: "hieu",
        top: 2
    },
    {
        id: 6,
        name: "my",
        top: 1
    },
    {
        id: 7,
        name: "ty",
        top: 1
    },
    {
        id: 8,
        name: "mai",
        top: 5
    }
]

function routes(datas, currentData) {
    let rs = "";
    let idTemp = currentData.top;

    if (idTemp === 0) {
        rs = currentData.name + ",Home";
    }

    rs = currentData.name + ","

    while (idTemp !== 0) {
        let parentData = datas.find(data => data.id === idTemp)
        idTemp = parentData.top;
        if (idTemp !== 0) {
            rs += parentData.name + ","
        } else if (idTemp === 0) {
            rs += parentData.name + ",Home"
        }
    }


    let path = rs.split(",")
    path = path.reverse();
    let routes = path.join("/")
    return routes;
}

const dataEx = {
    id: 8,
    name: "mai",
    top: 5
}

console.log(routes(datas, dataEx))



// let rs = "";
//     let item = data.map(i => {
//         return i.id == top;
//     })
//     rs += item.name + ","
//     while(item.id !== 0) {
//         item = data.map(j => {5
//             return item.top == j.id;
//         })
//     }