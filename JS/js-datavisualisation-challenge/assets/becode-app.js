/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name : Vincent Bouton
Date :  12/11/2019
Contact information : 
What does this script do ? 
...
*/

//const graph1 = () =>{
  //   const table1 =d3.select('#table1')
  //                   .selectAll('tr')
  //   console.log(table1)
  //   const graphic = ()=>{
  //     const divGraph = document.createElement('div')
  //     divGraph.id = "divTab"
  //     const selectParentsOfTable = document.getElementById("mw-content-text")
  //     let parent = selectParentsOfTable.parentNode;

  //     selectParentsOfTable.insertBefore(divGraph, table1)

// Your scripting goes here...

(()=>{

  const graphic1 = () => {
   
    const getCountry = ()=>{
      trTable1._groups[0].forEach((element,index)=>{
        if(index >= 2){
          country.push(element.cells[1].textContent)
        }
      })
    }

    const getYearsOfOption = () =>{
      const yearOfOption = [];
      for(const element of trTable1._groups[0][1].cells){
        if(element.cellIndex >= 2){
          yearOfOption.push(element.textContent)
        }
      }
      return yearOfOption;
    }
    
    const getYears= years=>{
      for(const element of trTable1._groups[0][1].cells){
        if(element.textContent === years){
          year = element.cellIndex
        }
      }
    }

    const createButton = () => {
      const divButton = document.createElement("div")
      divButton.id = "divButton"
      const selectParentsOfButton = document.getElementById("mw-content-text");
      selectParentsOfButton.insertBefore(divButton,document.getElementById('divTab'))

      const dropdownButton = d3.select(divButton)
                                .append('select')
      
      dropdownButton.selectAll("myOption")
                      .data(yearOfOption)
                    .enter()
                      .append('option')
                    .text(d => d)
                    .attr('value', d => d)
        
    }

    const createGraph = (country)=> {
      const divGraph = document.createElement("div")
      divGraph.id = "divTab"
      const selectParentsOfTable = document.getElementById("mw-content-text");
      selectParentsOfTable.insertBefore(divGraph, table1)

      let margin = {top: 30, right: 30, bottom: 70, left: 60},
          width = 900 - margin.left - margin.right;

      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    svg = d3.select("#divTab")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

      // X axis
      x = d3.scaleBand()
        .range([ 0, width ])
        .domain(country)
        .padding(0.2);  
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");

      // Add Y axis
      y = d3.scaleLinear()
        .domain([0, 10000])
        .range([ height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y));

        svg.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
          .attr("x", d => 1)
          .attr("y",d => 1)
          .attr("width", x.bandwidth())
          .attr("height", d => 1)
          .attr("fill", '#')
    }

    const graph = (data) => {
    // console.log(createDivforGraph)
    // set the dimensions and margins of the graph

    for(let i = 0; i < value.length; i++){
      if(isNaN(value[i])){
        data.splice(i,1,new Data(country[i],0,colors[i]))
      }else{
        data.splice(i,1,new Data(country[i],value[i],colors[i]))
      }
    }

     console.log(data)

      // Bars
      svg.selectAll('rect')
          .data(data)
          .transition()
          .attr('x', d => x(d.country))
          .attr('y', d => y(d.value))
          .attr('height', d => height - y(d.value))
          .attr('fill', d => d.color)
          
      
    }

    const getYearsBySwitch = e =>{
      option = e.target.value
      // console.log(value)
      getYears(option)
      getValueByYear(year)
    }

    const getValueByYear = years => {
      trTable1._groups[0].forEach((element, index)=>{
        if(index >= 2){
          value.splice(index-2, 1,element.cells[years].textContent)
        }
      })
      value.forEach((element,index)=> {
        element = parseFloat(element.replace(/[,.]/g, m => (m === ',' ? '.' : '.')))
        value.splice(index,1,element)
      })
    }

    class Data {
      constructor(country,value,color){
        this.country = country;
        this.value = value;
        this.color = color
      }
    }

    const randomColor = () => {
      let random ='0123456789ABCDEF'
      let color = "#"
      for (let i = 0;i <6;i++){
        color += random[Math.floor(Math.random()*16)]
      }
      return color
    }

// SCRIPT START 


    const trTable1 = d3.select("#table1")
                       .selectAll("tr") // Récupère tous les tr du premier tableau de données
    // console.log(trTable1)

    const yearOfOption = getYearsOfOption();
    const country = []
    const value = []
    const data = []
    const colors = [];
    console.log(colors)
    trTable1._groups[0].forEach((element,index)=>{
      if(index>=2){
        value.push("_")
        data.push('_')
        colors.push(randomColor())
      }
    })

    let year;
    let option = '2002'
    let x;
    let y;
    let svg;
    let height;

    getCountry();
    createGraph(country)
    createButton()
    getValueByYear(2)

    document.getElementById('divButton').addEventListener('change',getYearsBySwitch)
    document.getElementById('divButton').addEventListener('change',()=> graph(data))
    graph(data)
  }
  graphic1()


  const graphic2 = () => {  

    const getYearsOfOption = () =>{
      for(const element of trTable2._groups[0][0].cells){
        if(element.cellIndex > 1){
          yearOfOption.push(element.textContent)
        }
      }
    }

    const getCountry = ()=>{
      trTable2._groups[0].forEach((element,index)=>{
        if(index >= 1){
          country.push(element.cells[1].textContent)
        }
      })
    }

    const getYears= years=>{
      for(const element of trTable2._groups[0][0].cells){
        if(element.textContent === years){
          year = element.cellIndex
        }
      }
    }

    const createGraph = (country)=> {
      const divGraph = document.createElement("div")
      divGraph.id = "divTab2"
      const selectParentsOfTable = document.getElementById("mw-content-text");
      selectParentsOfTable.insertBefore(divGraph, table2)

      let margin = {top: 30, right: 30, bottom: 70, left: 60},
          width = 900 - margin.left - margin.right;
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    svg = d3.select("#divTab2")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

      // X axis
      x = d3.scaleBand()
        .range([ 0, width ])
        .domain(country)
        .padding(0.2);  
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");

      // Add Y axis
      y = d3.scaleLinear()
        .domain([0, 400])
        .range([ height, 0]);
      svg.append("g")
        .call(d3.axisLeft(y));

        svg.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
          .attr("x", d => 1)
          .attr("y",d => 1)
          .attr("width", x.bandwidth())
          .attr("height", d => 1)
          .attr("fill", `${randomColor()}`)
    }

    const createButton = () => {
      const divButton = document.createElement("div")
      divButton.id = "divButton2"
      const selectParentsOfButton = document.getElementById("mw-content-text");
      selectParentsOfButton.insertBefore(divButton,document.getElementById('divTab2'))

      const dropdownButton = d3.select(divButton)
                                .append('select')
      
      dropdownButton.selectAll("myOption")
                      .data(yearOfOption)
                    .enter()
                      .append('option')
                    .text(d => d)
                    .attr('value', d => d)
        
    }

    const getValueByYear = years => {
      trTable2._groups[0].forEach((element, index)=>{
        if(index >= 1){
          value.splice(index-1, 1,element.cells[years].textContent)
        }
      })
      value.forEach((element,index)=> {
        element = parseFloat(element.replace(/[,.]/g, m => (m === ',' ? '.' : '.')))
        value.splice(index,1,element)
      })
    }

    const getYearsBySwitch = e =>{
      option = e.target.value
      // console.log(value)
      getYears(option)
      getValueByYear(year)
    }

    const graph = (data) => {
      // console.log(createDivforGraph)
      // set the dimensions and margins of the graph
      // console.log(data)
      for(let i = 0; i < value.length; i++){
        if(isNaN(value[i])){
          data.splice(i,1,new Data(country[i],0,colors[i]))
        }else{
          data.splice(i,1,new Data(country[i],value[i],colors[i]))
        }
        
      }
  
      console.log(data)
  
        // Bars
        svg.selectAll('rect')
            .data(data)
            .transition()
            .attr('x', d => x(d.country))
            .attr('y', d => y(d.value))
            .attr('height', d => height - y(d.value))
            .attr('fill', d => d.color)
    }
    
    class Data {
      constructor(country,value,color){
        this.country = country;
        this.value = value;
        this.color = color
      }
    }

    const randomColor = () => {
      let random ='0123456789ABCDEF'
      let color = "#"
      for (let i = 0;i <6;i++){
          color += random[Math.floor(Math.random()*16)]
      }
      return color
    }

    const trTable2 = d3.select("#table2")
                       .selectAll("tr")
    console.log(trTable2)

    const yearOfOption = []
    const country = []
    const value = []
    const data = []
    const colors = []

    trTable2._groups[0].forEach((element,index)=>{
      if(index>=1){
        value.push("_")
        data.push('_')
        colors.push(randomColor())
      }
    })

    let year;
    let option;
    let x;
    let y;
    let svg;
    let height

    getCountry()
    getYearsOfOption()
    createGraph(country)

    createButton()
    getValueByYear(2)

    document.getElementById('divButton2').addEventListener('change',getYearsBySwitch)
    document.getElementById('divButton2').addEventListener('change',()=> {
      graph(data)
    })
    graph(data)

  }
  graphic2()

  const graphic3 = async() => {

    const createGraph = (data) => {
      const divGraph = document.createElement("div")
      divGraph.id = "divTab3"
      const selectParentsOfTable = document.getElementById("firstHeading");
      selectParentsOfTable.after(divGraph)
      
      let margin = {top: 30, right: 30, bottom: 70, left: 60};
      width = 700 - margin.left - margin.right;
      height = 700 - margin.top - margin.bottom;
      console.log(data)

      svg = d3.select("#divTab3")
      .attr('style', 'display:flex;justify-content:center;')
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");
      
      y = d3.scaleBand()
        .domain([1,2,3,4,5,6,7,8,9,10])
        .range([height,0])


      svg.append("g")
        .attr("transform","translate("+width/2 +",0)")
        .call(d3.axisLeft(y));
      
      x = d3.scaleLinear()
        .domain([-20, 20])
        .range([ 0, width]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");

        svg.selectAll("myRect")
          .data(data)
          .enter()
          .append("rect")
          .attr("x", x(0) )
          .attr("y", d => 1)
          .attr("width", d => 1)
          .attr("height", y.bandwidth() )
          .attr("fill", randomColor())
        
    }
    const getJson = async()=>{
      let request = await fetch('https://inside.becode.org/api/v1/data/random.json')
      let data = await request.json()
      return data
    } 

    const graph = async(data) => {
      pushDataInObject(json)
      svg.selectAll('rect')
          .data(data)
          .attr('width', d => Math.abs(x(d.value2)-x(0))) // .bandwith() devides the space into the number of rects
          .attr('height', y.bandwidth())
          .attr('y',d => y(d.value1))
          .attr('x',d =>  x(Math.min(0, d.value2)))
          .attr('fill', d => d.color)

    }

    const randomColor = () => {
      let random ='0123456789ABCDEF'
      let color = "#"
      for (let i = 0;i <6;i++){
          color += random[Math.floor(Math.random()*16)]
      }
      return color
    }

    class Data {
      constructor(value1, value2,color,index){
        this.index = index
        this.value1 = value1
        this.value2 = value2
        this.color  = color
      }
    }

    const pushDataInObject = (json)=>{
      json.forEach((element,index) => {
        data.splice(index,1,new Data(element[0],element[1],randomColor(),index+1))
      });
    }

    let json = await getJson();
    const data = [];
    json.forEach(element => {
      data.push('_')
    });

    let svg;
    let y;
    let x;
    let width;

    pushDataInObject(json)
    createGraph(data)
    graph(data)

    setInterval(async()=>{
      
      class Data {
        constructor(value1, value2,color,index){
          this.index = index
          this.value1 = value1
          this.value2 = value2
          this.color  = color
        }
      }
      const pushDataInObject = (json)=>{
        json.forEach((element,index) => {
          data.splice(index,1,new Data(element[0],element[1],randomColor(),index+1))
        });
      }
      const graph = async(data) => {
        pushDataInObject(json)
        svg.selectAll('rect')
            .data(data)
            .attr('width', d => Math.abs(x(d.value2)-x(0))) // .bandwith() devides the space into the number of rects
            .attr('height', y.bandwidth())
            .attr('y',d => y(d.value1))
            .attr('x',d =>  x(Math.min(0, d.value2)))
            .attr('fill', d => d.color)
  
      }
      const getJson = async()=>{
        let request = await fetch('https://inside.becode.org/api/v1/data/random.json')
        let data = await request.json()
        return data
      } 
      let json = await getJson();
      const data = [];
      json.forEach(element => {
        data.push('_')
      });
      pushDataInObject(json)
      console.log(data)
      graph(data)
    },1000)
    
  }
  graphic3()
})()

