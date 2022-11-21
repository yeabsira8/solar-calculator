 function showResult() {

        var panel_efficiency = 0.18;
        var H = 1000;
        var PR = 0.75;

        var area = document.getElementById("area").value;
        var area = (area*0.75);
        var panels = Math.round((area)/1.64);

        Number_of_panels_needed.innerHTML= Math.round((area)/1.64);

        capacity.innerHTML= Math.round(panels*295/1000)+ " kW";

        var bill = document.getElementById("bill").value;

        generation.innerHTML= Math.round(area*panel_efficiency*H*PR/1000)+ " MWh";
        saving.innerHTML= Math.round(bill*12)+ " €";
        var savings = (bill*12);
        var costs = ((panels*295)*3);

        payoff.innerHTML = Math.round(costs / savings) + " years";

        e_cost.innerHTML = Math.round(costs) + " €";

        roı.innerHTML = Math.round((((25*savings)-costs)/costs)*100)+ " % over lifetime";

        var quote1 = "Get Solar Quote";

        quote.innerHTML = quote1;








        }
