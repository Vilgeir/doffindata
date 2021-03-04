const structure = [
    {
        code: "00000000",
        name: "",
        count: "4",
        children: [
            {code: "00110000",
            name: "",
            children: []}
        ]

    },
    {
        code: "00000000",
        name: "",
        count: "4",
        children: [
            {"code": "00110000",
            "children": []}
        ]

    },
]


<ul>
structure.map(item => 
    <li>{item.name} {item.count}</li>
)
</ul>