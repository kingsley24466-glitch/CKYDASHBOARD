const ctx = document.getElementById("myChart");

new Chart(ctx,{
    type:"line",
    data:{
        labels:[
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ],
        datasets:[
            {
                label:"Focus Hours",
                data:[
                    2,
                    4,
                    3,
                    6,
                    2,
                    5,
                    8
                ],
                borderColor:"#00aaff",
                tension:0.4
            }
        ]
    }
});