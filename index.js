
    console.log("---welcome---");
      const url = "https://restcountries.com/v3.1/all";
    const element = document.getElementById("container");





      async function fetchData() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            let j = 0;
            
            for (let i =0;i<data.length;i++)
            {j++;
                const value = data[i];
                const html = `<div class='card'>
                <img src=${value?.flags?.png} />
                    <h3> 
                       - ♾name🥷🏿->${value?.name?.common}
                       
                    </h3>
                    <h3>- region🚩->${value?.region}</h3>
                    <h3>- population👉🏾✊🏾->${value?.population}</h3>
                    
                </div>`;
                element.innerHTML += html
            }

        } catch (error){
            console.log("---------error-------:", error.message);
        }
      }
    