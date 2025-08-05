let summaryDisplay = document.querySelector('#summary')



let getdata = () => {
  let userdate = document.querySelector('#search-date')
  let showdate = document.querySelector('#show-date')

  summaryDisplay.innerHTML = ""
  showdate.innerHTML = ""

  fetch('https://api.rootnet.in/covid19-in/stats/history')
    .then(res => res.json())
    .then(data => {

      if (data.success == true) {
        let info = data.data
        if (userdate.value == "") {
          userdate.value = "2020-03-10"
        }
        let exit = true
        info.forEach((element) => {
          if (element.day === userdate.value) {
            let regional = element.regional
            let summary = element.summary
            printdata(regional, summary)
            exit = false
            return
          }


        });

        if (exit) {
          let displaydata = document.querySelector('#displaydata')
          displaydata.innerHTML = `<h2 class="text-center my-auto">Data Not Found</h2> `
        } else {
          showdate.innerHTML = userdate.value
        }
        userdate.value = ""
      }
    })

    .catch(err => console.log(err))
}
getdata()

document.querySelector('#search-btn').addEventListener('click', () => {
  let userdate = document.querySelector('#search-date')
  if (userdate.value == "") {
    alert("Enter Date")
  } else {
    getdata()
  }

})


let printdata = (data, summary) => {
  let displaydata = document.querySelector('#displaydata')
  let summaryData = `
 <div class="col-8">
  <div class="card covid-stats-card">
    <div class="card-body text-center p-4">
      <h3 class="state-name my-auto">Indai<h3>
      <div class="stats-grid mt-3">
        <div class="stat-item cases">
          <div class="stat-number cases">${summary.confirmedCasesIndian}</div>
          <div class="stat-label">New Cases</div>
        </div>
        <div class="stat-item deaths">
          <div class="stat-number deaths">${summary.deaths}</div>
          <div class="stat-label">Total Deaths</div>
        </div>      
        <div class="stat-item recovered">
          <div class="stat-number recovered">${summary.discharged}</div>
          <div class="stat-label">Recovered</div>
        </div>
      </div>
    </div>
  </div>
  </div> `

  summaryDisplay.innerHTML = summaryData

  let alldata = ""
  data.forEach((element) => {
    let row = `
 <div class="col-md-6 col-lg-3">
  <div class="card covid-stats-card">
    <div class="card-body text-center p-4">
      <h3 class="state-name my-auto">${element.loc}</h3>
      <div class="stats-grid mt-3">
        <div class="stat-item cases">
          <div class="stat-number cases">${element.confirmedCasesIndian}</div>
          <div class="stat-label">New Cases</div>
        </div>
        <div class="stat-item deaths">
          <div class="stat-number deaths">${element.deaths}</div>
          <div class="stat-label">Total Deaths</div>
        </div>      
        <div class="stat-item recovered">
          <div class="stat-number recovered">${element.discharged}</div>
          <div class="stat-label">Recovered</div>
        </div>
      </div>
    </div>
  </div>
</div>
         
         `
    alldata += row
  })
  displaydata.innerHTML = alldata
}