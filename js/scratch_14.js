 function showResult() {

        var panel_efficiency = 0.18;
        var H = 1000;
        var PR = 0.75;

        var area = document.getElementById("area").value;
        var area = (area*0.75);
        var panels = Math.round((area)/1.64);

        Number_of_panels_needed.innerHTML=Math.round((area)/1.64);

        capacity.innerHTML= Math.round(panels*295/1000)+ " kW";

        var bill = document.getElementById("bill").value;
        generation.innerHTML= Math.round(area*panel_efficiency*H*PR/1000)+ " MWh";
        var savings = Math.round(bill*12);
        var parts = savings.toString().split(".");
        var num = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
        saving.innerHTML=num + " €";

        var savings = (bill*12);
        var costs = ((panels*295)*3);

        payoff.innerHTML = Math.round(costs / savings) + " years";
        var cost = Math.round(costs);
        var parts = cost.toString().split(".");
        var num1 = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
        e_cost.innerHTML = num1 + " €";

        roı.innerHTML = Math.round((((25*savings)-costs)/costs)*100)+ " % over lifetime";

        var quote1 = "Get Solar Quote";

        quote.innerHTML = quote1;

        var x = document.getElementById("answers22");
            x.style.display = "block";

}

function showResult1() {
        var error = document.getElementById("error");
        if (isNaN(document.getElementById("area").value))
        {

            // Changing HTML to draw attention
            error.innerHTML = "<span style='color: red;'>"+
                        "Please enter an area </span>"
        } else {
            error.innerHTML = ""
        }

 }
