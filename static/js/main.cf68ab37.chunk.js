(window.webpackJsonpinterface=window.webpackJsonpinterface||[]).push([[0],{22:function(e,a,t){e.exports=t(35)},27:function(e,a,t){},28:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),o=t(19),r=t.n(o),s=(t(27),t(6)),i=t(7),g=t(9),c=t(8),m=t(10),_=t(1),u=t(11),h=(t(28),"/"),p="/user",E="/team",d="/team/roster",b="/team/scheduling",v="/team/recruits",N="/availableteams",f="/recruiting",S="/depthchart",y=function(e){return n.a.createElement("div",{className:"navbar-end"},n.a.createElement("div",{className:"navbar-item"},n.a.createElement(_.b,{to:p},n.a.createElement("span",{className:"glyphicon glyphicon-user"}),e.user.username)),n.a.createElement("div",{className:"navbar-item"},n.a.createElement(_.b,{to:h},n.a.createElement("span",{className:"fas fa-sign-out-alt"})," log out")),n.a.createElement(function(e){return 1===e.user.roleID?n.a.createElement("div",{className:"navbar-item has-dropdown"},n.a.createElement("a",{href:"#",className:"navbar-link","data-toggle":"dropdown",role:"button","aria-expanded":"false"},n.a.createElement("span",{className:"glyphicon glyphicon-info-sign"})," ","Administration ",n.a.createElement("span",{className:"caret"})),n.a.createElement("div",{className:"navbar-dropdown"},n.a.createElement("a",{className:"navbar-item",href:"/admin/teams/all"},"All Teams"),n.a.createElement("hr",{className:"navbar-divider"}),n.a.createElement("a",{href:"/admin/teams/assign"},"Assign Team"))):null},{user:e.user}))},C=function(){return n.a.createElement("div",{className:"navbar-end"},n.a.createElement("div",{className:"navbar-item"},n.a.createElement("a",{href:"/signup"},n.a.createElement("span",{class:"fas fa-user-plus"})," Sign up")),n.a.createElement("div",{className:"navbar-item"},n.a.createElement("a",{href:"/login"},n.a.createElement("span",{className:"fas fa-sign-in-alt"})," Login")))},A=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(t=Object(g.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).state={},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=function(){return n.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},n.a.createElement(_.b,{to:E,className:"navbar-link"},e.props.user.team),n.a.createElement("div",{className:"navbar-dropdown is-boxed"},n.a.createElement(_.b,{to:d,className:"navbar-item"},"Roster"),n.a.createElement(_.b,{to:S,className:"navbar-item"},"Depth Chart"),n.a.createElement(_.b,{to:v,className:"navbar-item"},"Recruiting Board"),n.a.createElement(_.b,{to:b,className:"navbar-item"},"Scheduling")))},t=function(){return n.a.createElement("div",{className:"navbar-item"},n.a.createElement(_.b,{to:N},n.a.createElement("span",{className:"glyphicon glyphicon-open"})," Request Team"))};return n.a.createElement("div",{className:"navbar-start"},n.a.createElement(function(l){if("undefined"!==typeof e.props.user&&"undefined"!==typeof e.props.user.username)return""!==e.props.user.teamAbbr?n.a.createElement(a,null):n.a.createElement(t,null)},null),n.a.createElement("div",{className:"navbar-item"},n.a.createElement(_.b,{to:f},"Recruits")))}}]),a}(l.Component),B=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(t=Object(g.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).state={test:!0},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("nav",{className:"navbar is-transparent is-marginless heading has-text-weight-bold",role:"navigation","aria-label":"main navigation"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement(_.b,{to:h,className:"navbar-item"},n.a.createElement("span",{className:"glyphicon glyphicon-home"})," Interface"),n.a.createElement("a",{href:"",role:"button",className:"navbar-burger","aria-label":"menu","aria-expanded":"false"},n.a.createElement("span",{"aria-hidden":"true"}),n.a.createElement("span",{"aria-hidden":"true"}),n.a.createElement("span",{"aria-hidden":"true"}))),n.a.createElement("div",{className:"navbar-menu"},"undefined"!=typeof this.props.user.username?n.a.createElement(A,{user:this.props.user}):null,"undefined"!=typeof this.props.user.username?n.a.createElement(y,{user:this.props.user}):n.a.createElement(C,null)))}}]),a}(l.Component),w=function(){return n.a.createElement("div",{className:""},n.a.createElement("div",{className:"hero-body center"},n.a.createElement("div",{className:"has-text-centered is-vcentered",style:{paddingBottom:"15rem"}},n.a.createElement("img",{src:"img/sfalogo.png"}),n.a.createElement("h3",{className:"subtitle is-3 heroText"},"Your team. Your players. Your legacy."))))},T=function(){return n.a.createElement("div",{className:"landingPage"},n.a.createElement(w,null))},M={Air_Force:"./img/logos/Air_Force_Falcons_logo.png",Akron_Zips:"./img/logos/Arkon_Zips_logo.png",Alabama:"./img/logos/Alabama_Crimson_Tide_logo.png",App_State:"./img/logos/appstate_logo.png",Arizona_State:"./img/logos/Arizona_State_Sun_Devils.png",Arizona:"./img/logos/Arizona_Wildcats_logo.png",Arkansas:"./img/logos/arkansas_logo.png",Arkansas_State:"./img/logos/Arkansas_State_Red_Wolves_logo.png",Army:"./img/logos/Army_West_Point_logo.png",Auburn:"./img/logos/Auburn_Tigers_logo.png",Ball_State:"./img/logos/Ball_State_Cardinals_logo.png",Baylor:"./img/logos/Baylor_Athletics_logo.png",Boise_State:"./img/logos/Boise_State_Broncos_logo.png",Boston_College:"./img/logos/Boston_College_Eagles_logo.png",Bowling_Green:"./img/logos/Bowling_Green_Falcons_logo.png",Buffalo:"./img/logos/Buffalo_Bulls_logo.png",BYU:"./img/logos/BYU_Cougars_logo.png",California:"./img/logos/California_Golden_Bears_logo.png",Central_Michigan:"./img/logos/Central_Michigan_Chippewas_logo.png",Charlotte:"./img/logos/Charlotte_49ers_logo.png",Cincinnati:"./img/logos/Cincinnati_Bearcats_logo.png",Clemson:"./img/logos/Clemson_Tigers_logo.png",Coastal_Carolina:"./img/logos/Coastal_Carolina_Chanticleers_logo.png",Colorado:"./img/logos/Colorado_Buffaloes_logo.png",Colorado_State:"./img/logos/Colorado_State_Rams_logo.png",Connecticut:"./img/logos/Connecticut_Huskies_logo.png",Duke:"./img/logos/Duke_Athletics_logo.png",East_Carolina:"./img/logos/East_Carolina_Pirates_logo.png",Eastern_Michigan:"./img/logos/Eastern_Michigan_Eagles_logo.png",FIU:"./img/logos/FIU_Panthers_logo.png",Florida_Atlantic:"./img/logos/Florida_Atlantic_Owls_logo.png",Florida:"./img/logos/Florida_Gators_logo.png",Florida_State:"./img/logos/Florida_State_Seminoles_logo.png",Fresno_State:"./img/logos/Fresno_State_Bulldogs_logo.png",Georgia:"./img/logos/Georgia_Athletics_logo.png",Georgia_Southern:"./img/logos/Georgia_Southern_Eagles_logo.png",Georgia_State:"./img/logos/Georgia_State_Athletics_logo.png",Georgia_Tech:"./img/logos/Georgia_Tech_Yellow_Jackets_logo.png",Hawaii:"./img/logos/Hawaii_Warriors_logo.png",Houston:"./img/logos/Houston_Cougars_primary_logo.png",Idaho:"./img/logos/Idaho_Vandals_logo.png",Illinois:"./img/logos/Illinois_Fighting_Illini_logo.png",Indiana:"./img/logos/Indiana_Hoosiers_logo.png",Iowa:"./img/logos/Iwoa_Hawkeyes_logo.png",Iowa_State:"./img/logos/Iowa_State_Cyclones_logo.png",Kansas:"./img/logos/Kansas_Jayhawks_logo.png",Kansas_State:"./img/logos/Kansas_State_Wildcats_logo.png",Kent_State:"./img/logos/Kent_State_athletic_logo.png",Kentucky:"./img/logos/Kentucky_Wildcats_logo.png",Liberty:"./img/logos/Liberty_Flames_logo.png",Louisiana_Tech:"./img/logos/Louisian_Tech_Athletics_logo.png",Louisiana:"./img/logos/Louisiana-lafayette-ragin-cajuns-logo.png",Louisiana_Monroe:"./img/logos/Louisiana-Monroe-Warhawks.png",Louisville:"./img/logos/Louisville_Cardinals_logo.png",LSU:"./img/logos/LSU_Athletics_logo.png",Marshall:"./img/logos/Marshall_Thundering_Herd_logo.png",Maryland:"./img/logos/Maryland_Terrapins_logo.png",Memphis:"./img/logos/Memphis_Tigers_logo.png",Miami:"./img/logos/Miami_Hurricanes_logo.png",Miami_OH:"./img/logos/Miami_Redhawks_logo.png",Michigan_State:"./img/logos/Michigan_State_Athletics_logo.png",Michigan:"./img/logos/Michigan_Wolverines_logo.png",Middle_Tennessee:"./img/logos/Middle_Tennessee_Athletics_logo.png",Minnesota:"./img/logos/Minnesota_Golden_Gophers_logo.png",Mississippi_State:"./img/logos/Mississippi_State_Bulldogs_logo.png",Missouri:"./img/logos/Missouri_Tigers_logo.png",Navy:"./img/logos/Navy_Athletics_logo.png",Nebraska:"./img/logos/Nebraska_Cornhuskers_logo.png",Nevada:"./img/logos/Nevada_Wolf_Pack_logo.png",New_Mexico:"./img/logos/New_Mexico_Lobos_logo.png",New_Mexico_State:"./img/logos/New_Mexico_state_Aggie_logo.png",NC_State:"./img/logos/North_Carolina_State_University_Athletic_logo.png",North_Carolina:"./img/logos/North_Carolina_Tar_Heels_logo.png",NIU:"./img/logos/Northern_Illinois_Huskies_logo.png",Northwestern:"./img/logos/Northwestern_Wildcats_logo.png",Notre_Dame:"./img/logos/Notre_Dame_Fighting_Irish_logo.png",Ohio:"./img/logos/Ohio_Bobcats_logo.png",Ohio_State:"./img/logos/Ohio_State_Buckeyes_logo.png",Oklahoma:"./img/logos/Oklahoma_Sooners_logo.png",Oklahoma_State:"./img/logos/Oklahoma_State_logo.png",Old_Dominion:"./img/logos/Old_Dominion_Athletics_logo.png",Ole_Miss:"./img/logos/Ole_Miss_Rebels_logo.png",Oregon:"./img/logos/Oregon_Ducks_logo.png",Oregon_State:"./img/logos/Oregon_State_Beavers_logo.png",Penn_State:"./img/logos/Penn_State_Nittany_Lions_logo.png",Pitt:"./img/logos/Pitt_Panthers_logo.png",Purdue:"./img/logos/Purdue_Boilermakers_logo.png",Rice:"./img/logos/Rice_Owls_logo.png",Rutgers:"./img/logos/Rutgers_Scarlet_Knights_logo.png",San_Diego:"./img/logos/San_Dieg_State_Aztecs_logo.png",San_Jose:"./img/logos/San_Jose_State_Spartans_logo.png",SMU:"./img/logos/SMU_Mustang_logo.png",South_Alabama:"./img/logos/South_Alabama_Jaguars_logo.png",South_Carolina:"./img/logos/South_Carolina_Gamecocks_logo.png",South_Florida:"./img/logos/South_Florida_Bulls_logo.png",Southern_Miss:"./img/logos/Southern_Miss_Athletics_logo.png",Stanford:"./img/logos/Stanford_Cardinal_logo.png",Syracuse:"./img/logos/Syracuse_Orange_logo.png",TCU:"./img/logos/TCU_Horned_Frogs_logo.png",Temple:"./img/logos/Temple_Owls_logo.png",Tennessee:"./img/logos/Tennessee_Volunteers_logo.png",".Texas_A&M":"./img/logos/Texas_A&M_University_logo.png",Texas:"./img/logos/Texas_Longhorns_logo.png",Texas_Tech:"./img/logos/Texas_Tech_Athletics_logo.png",Toledo:"./img/logos/Toledo_Rockets_logo.png",Troy:"./img/logos/Troy_Trojans_logo.png",Tulane:"./img/logos/Tulane_Green_Wave_logo.png",Tulsa:"./img/logos/Tulsa_Golden_Hurricane_logo.png",UAB:"./img/logos/UAB_Blazers_logo.png",UCF:"./img/logos/UCF_Knights_logo.png",UCLA:"./img/logos/UCLA_Bruins_logo.png",UMASS:"./img/logos/UMass_Amherst_Athletics_logo.png",UNLV:"./img/logos/UNLV_Rebels_wordmark.png",USC:"./img/logos/USC_Trojans_logo.png",Utah_State:"./img/logos/Utah_State_Aggies_logo.png",Utah:"./img/logos/Utah_Utes_logo.png",UTEP:"./img/logos/UTEP_Miners_logo.png",UTSA:"./img/logos/UTSA_Roadrunners_logo.png",Vanderbilt:"./img/logos/Vanderbilt_Commodores_logo.png",Virginia:"./img/logos/Virginia_Cavaliers_sabre.png",Virginia_Tech:"./img/logos/Virginia_Tech_Hokies_logo.png",Wake_Forest:"./img/logos/Wake_Forest_University_Athletic_logo.png",Washington:"./img/logos/Washington_Huskies_logo.png",Washington_State:"./img/logos/Washington_State_Cougars_logo.png",West_Virginia:"./img/logos/West_Virginia_Mountaineers_logo.png",Western_Michigan:"./img/logos/Western_Michigan_Broncos_logo.png",Wisconsin:"./img/logos/Wisconsin_Badgers_logo.png",Western_Kentucky:"./img/logos/WKU_Athletics_logo.png",Wyoming:"./img/logos/Wyoming_Athletics_logo.png"},k=function(e){return n.a.createElement("div",{className:"tile is-parent"},n.a.createElement("div",{className:"card team"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-128x128"},n.a.createElement("img",{src:e.logo}))),n.a.createElement("div",{className:""},n.a.createElement("p",{className:"title is-4"},e.team),n.a.createElement("p",{className:"subtitle is-6"},e.mascot),n.a.createElement("p",{className:"Conference"},e.conference),n.a.createElement("p",null,n.a.createElement("strong",null,"Head Coach:")," ",n.a.createElement("i",null,"None")))),n.a.createElement("footer",{className:"card-footer"},n.a.createElement("a",{className:"card-footer-item"},"Request"))))},O=function(e){function a(){return Object(s.a)(this,a),Object(g.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"hero-body center"},n.a.createElement("div",{className:"container is-fluid has-text-centered userInterface"},n.a.createElement("h2",{className:"subtitle is-3"},"Available Teams"),n.a.createElement("div",{className:"scrollbar available-ui-height"},n.a.createElement("div",{className:"tile is-ancestor teams"},n.a.createElement(k,{team:"Baylor",mascot:"Bears",conference:"Big 12 Conference",logo:M.Baylor}),n.a.createElement(k,{team:"Boise State",mascot:"Broncos",conference:"Mountain West Conference",logo:M.Boise_State}),n.a.createElement(k,{team:"California",mascot:"Golden Bears",conference:"Pac 12 Conference",logo:M.California}),n.a.createElement(k,{team:"Eastern Michigan",mascot:"Eagles",conference:"Mid-American Conference",logo:M.Eastern_Michigan}),n.a.createElement(k,{team:"Florida",mascot:"Gators",conference:"South Eastern Conference",logo:M.Florida}),n.a.createElement(k,{team:"FIU",mascot:"Panthers",conference:"Conference-USA",logo:M.FIU}),n.a.createElement(k,{team:"Hawaii",mascot:"Rainbow Warriors",conference:"Mountain West Conference",logo:M.Hawaii}),n.a.createElement(k,{team:"Kansas",mascot:"Jayhawks",conference:"Big 12 Conference",logo:M.Kansas}),n.a.createElement(k,{team:"Kansas State",mascot:"Wildcats",conference:"Big 12 Conference",logo:M.Kansas_State}),n.a.createElement(k,{team:"LSU",mascot:"Tigers",conference:"South Eastern Conference",logo:M.LSU}),n.a.createElement(k,{team:"Michigan",mascot:"Wolverines",conference:"Big 10 Conference",logo:M.Michigan}),n.a.createElement(k,{team:"Nevada",mascot:"Wolf Pack",conference:"Mountain West Conference",logo:M.Nevada}),n.a.createElement(k,{team:"Oregon",mascot:"Ducks",conference:"Pac 12 Conference",logo:M.Oregon}),n.a.createElement(k,{team:"West Virginia",mascot:"Mountaineers",conference:"Big 12 Conference",logo:M.West_Virginia})))))}}]),a}(l.Component),W=function(e){var a=e.title.toLowerCase(),t=e.title.slice(0,1)+a.slice(1);return n.a.createElement(_.b,{to:e.route},n.a.createElement("div",{className:"card-image image-gap"},n.a.createElement("figure",{className:"image tile-image"},n.a.createElement("img",{src:e.image,alt:t,className:"profile-image"})),n.a.createElement("div",{className:"is-overlay overlay"},n.a.createElement("h1",{className:"overlay-text"},e.title))))},U=function(e){return n.a.createElement(_.b,{to:E,className:"tile"},n.a.createElement("h2",null,e.data.team))},j=function(){return n.a.createElement(_.b,{to:N,className:"tile"},n.a.createElement("h2",null,"Available Teams"))},H=function(e){return console.log(e),n.a.createElement("div",{className:"hero-body center"},n.a.createElement("div",{className:"container has-text-centered userInterface"},n.a.createElement("h2",{className:"subtitle is-3"},e.data.username),n.a.createElement("div",{className:"tile is-ancestor is-vertical"},n.a.createElement("div",{className:"tile is-parent"},n.a.createElement("div",{className:"tile is-2"},n.a.createElement("div",{className:"image"},n.a.createElement("img",{src:M.Washington_State,alt:"Go Cougs"}))),n.a.createElement("div",{className:"tile is-parent is-vertical is-3"},n.a.createElement("div",{className:"tile is-vertical"},n.a.createElement("div",{className:"tile"},n.a.createElement("h1",null,"User")),n.a.createElement("div",{className:"tile"},n.a.createElement("h3",null,"Change Password"))),n.a.createElement("div",{className:"tile is-vertical"},""!==e.data.teamAbbr?n.a.createElement(U,{data:e.data}):n.a.createElement(j,null)),n.a.createElement("div",{className:"tile is-vertical"},n.a.createElement("div",{className:"tile"},n.a.createElement("h1",null,"Overall W/L ")),n.a.createElement("div",{className:"tile"},n.a.createElement("h3",null,"Current W/L")))),n.a.createElement("div",{className:"tile is-parent is-vertical"},n.a.createElement("div",{className:"tile is-parent"},n.a.createElement(W,{image:"./img/userpage/roster4.jpg",title:"ROSTER",route:d}),n.a.createElement(W,{image:"./img/userpage/depthchart2.jpg",title:"DEPTH CHART",route:S})),n.a.createElement("div",{className:"tile is-parent"},n.a.createElement(W,{image:"./img/userpage/roster5.jpg",title:"RECRUITING",route:f}),n.a.createElement(W,{image:"./img/userpage/schedule2.jpg",title:"SCHEDULING",route:b})))))))},R=function(e){return n.a.createElement("tr",null,n.a.createElement("th",null,e.data.name),n.a.createElement("td",null,e.data.position),n.a.createElement("td",null,e.data.archtype),n.a.createElement("td",null,e.data.overall),n.a.createElement("td",null,e.data.year),n.a.createElement("td",null,e.data.height),n.a.createElement("td",null,e.data.weight),n.a.createElement("td",null,e.data.state),n.a.createElement("td",null,e.data.school),n.a.createElement("td",null,e.data.potential),n.a.createElement("td",null,e.data.jersey))},L=[{name:"Aaron Kotar",position:"QB",archtype:"Scrambler",overall:"B",year:"(Sr.)",height:"6'2\"",weight:"205 lbs",state:"Ohio",school:"Buckeye High",potential:"C",jersey:"12"},{name:"Marquise Mariota",position:"QB",archtype:"Balanced",overall:"A",year:"(Fr.)",height:"6'4\"",weight:"235 lbs",state:"Hawaii",school:"St. Louis HS",potential:"C",jersey:"2"},{name:"Cal Beckam Jr",position:"WR",archtype:"Speed",overall:"C+",year:"So.",height:"6'5\"",weight:"200 lbs",state:"Texas",school:"Midway Highschool",potential:"B-",jersey:"85"},{name:"Chris Cross",position:"DE",archtype:"Speed Rusher",overall:"A",year:"Jr.",height:"6'7\"",weight:"268 lbs",state:"Georgia",school:"George Southwest CC",potential:"A",jersey:"72"},{name:"Quincy Sanford",position:"CB",archtype:"Ball Hawk",overall:"D",year:"Sr.",height:"5'9\"",weight:"180 lbs",state:"Delaware",school:"Barack Obama HS",potential:"D",jersey:"30"},{name:"Beau Allen",position:"DT",archtype:"Nose Tackle",overall:"A",year:"(Sr.)",height:"6'5\"",weight:"298 lbs",state:"Minnesota",school:"Minnetonka High School",potential:"B",jersey:"30"},{name:"Rob Adams",position:"OT",archtype:"Run Blocking",overall:"A",year:"Sr.",height:"6'3\"",weight:"289 lbs",state:"Florida",school:"Harmony",potential:"C",jersey:"61"},{name:"Jonas Skipper",position:"OG",archtype:"Balanced",overall:"A",year:"Sr.",height:"6'5\"",weight:"294 lbs",state:"Missouri",school:"Cassville",potential:"C+",jersey:"58"},{name:"Chris Butera",position:"OG",archtype:"Run Blocking",overall:"A",year:"Jr.",height:"6'5\"",weight:"306 lbs",state:"TX",school:"Manvel",potential:"B+",jersey:"63"},{name:"Chris Hinojosa",position:"ILB",archtype:"Field General",overall:"B",year:"Sr.",height:"6'0\"",weight:"234 lbs",state:"NJ",school:"West Long Branch",potential:"C+",jersey:"53"},{name:"Bobby Hammel",position:"OLB",archtype:"Pass Rush",overall:"B",year:"Sr.",height:"6'3\"",weight:"246 lbs",state:"NC",school:"Kinston",potential:"C+",jersey:"50"}],I=function(e){var a=L.map(function(e){return n.a.createElement(R,{data:e})}),t=L.length;return n.a.createElement("div",{className:"hero-body center"},n.a.createElement("div",{className:"container is-fluid has-text-centered userInterface"},n.a.createElement("h2",{className:"title is-3"},e.data.team," ",e.data.mascot," Roster"),n.a.createElement("div",{className:"columns center is-12"},n.a.createElement("div",{className:"column is-3"},n.a.createElement("h2",null,"Coach: ",e.data.username)),n.a.createElement("div",{className:"column is-3"},n.a.createElement("h2",null,"Season: 2019")),n.a.createElement("div",{className:"column is-3"},n.a.createElement("h2",null,"Players: ",t)),n.a.createElement("div",{className:"column is-3"},n.a.createElement("h2",null,"Redshirts: 0"))),n.a.createElement("div",{class:"is-divider"}),n.a.createElement("div",{className:"scrollbar roster-scrollbar"},n.a.createElement("div",{className:"table-wrapper"},n.a.createElement("table",{className:"table is-fullwidth is-hoverable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement("abbr",null,"Name")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Position"},"Pos")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Archtype"},"Archtype")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Overall"},"Ovr")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Year"},"Yr")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Height"},"Ht")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Weight"},"Wt")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"State"},"St")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"High School / JUCO"},"School")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Potential"},"Pot")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Jersey Number"},"Num")))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement("abbr",null,"Name")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Position"},"Pos")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Archtype"},"Archtype")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Overall"},"Ovr")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Year"},"Yr")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Height"},"Ht")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Weight"},"Wt")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"State"},"St")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"High School / JUCO"},"HS/JC")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Potential"},"Pot")),n.a.createElement("th",null,n.a.createElement("abbr",{title:"Jersey Number"},"Num")))),n.a.createElement("tbody",null,a))))))},P=function(e){return n.a.createElement("div",{className:"hero-body center"},n.a.createElement("div",{className:"container has-text-centered userInterface"},n.a.createElement("h2",{className:"title is-3"},e.data.team," ",e.data.mascot),n.a.createElement("div",{className:"columns is-12"},n.a.createElement("div",{className:"column is-2"},n.a.createElement("img",{src:M.Washington_State})),n.a.createElement("div",{className:"column is-3 text-left"},n.a.createElement("p",null,n.a.createElement("strong",null,"Location:")," Pullman, Washington"),n.a.createElement("p",null,n.a.createElement("strong",null,"Stadium:")," Martin Stadium"),n.a.createElement("p",null,n.a.createElement("strong",null,"Avg Attendance:")," 32,952"),n.a.createElement("p",null,n.a.createElement("strong",null,"Conference:")," Pac 12 Conference"),n.a.createElement("p",null,n.a.createElement("strong",null,"Division:"),"North"),n.a.createElement("p",null,n.a.createElement("strong",null,"Rivals:")," Washington Huskies, Idaho Vandals"),n.a.createElement("br",null),n.a.createElement("p",null,n.a.createElement("strong",null,"Coach:")," ",e.data.username),n.a.createElement("p",null,n.a.createElement("strong",null,"Overall:")," 30 Wins, 18 Losses"),n.a.createElement("p",null,n.a.createElement("strong",null,"Current Season:")," 12 Wins, 0 Losses"),n.a.createElement("p",null,n.a.createElement("strong",null,"Division Titles:")," 2018, 2019"),n.a.createElement("p",null,n.a.createElement("strong",null,"Conference Championships:")," 1917, 1930, 1997, 2002, 2019"),n.a.createElement("p",null,n.a.createElement("strong",null,"Bowl Record:")," 8 Wins, 7 Losses")),n.a.createElement("div",{className:"column is-7"},n.a.createElement("div",{className:"tile is-parent"},n.a.createElement(W,{image:"./img/userpage/roster4.jpg",title:"ROSTER",route:d}),n.a.createElement(W,{image:"./img/userpage/depthchart2.jpg",title:"DEPTH CHART",route:S})),n.a.createElement("div",{className:"tile is-parent"},n.a.createElement(W,{image:"./img/userpage/roster5.jpg",title:"RECRUITING",route:f}),n.a.createElement(W,{image:"./img/userpage/schedule2.jpg",title:"SCHEDULING",route:b}))))))},x=(t(34),function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,n=new Array(l),o=0;o<l;o++)n[o]=arguments[o];return(t=Object(g.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(n)))).state={user:{username:"TuscanSota",team:"Washington State",teamAbbr:"WAST",mascot:"Cougars",roleID:0}},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(_.a,{basename:"/simfba-interface"},n.a.createElement("div",{className:"App hero is-fullheight"},n.a.createElement(B,{user:this.state.user}),n.a.createElement(u.a,{exact:!0,path:h,component:T}),n.a.createElement(u.a,{exact:!0,path:p,render:function(){return n.a.createElement(H,{data:e.state.user})}}),n.a.createElement(u.a,{exact:!0,path:E,render:function(){return n.a.createElement(P,{data:e.state.user})}}),n.a.createElement(u.a,{exact:!0,path:d,render:function(){return n.a.createElement(I,{data:e.state.user})}}),n.a.createElement(u.a,{exact:!0,path:S,component:T}),n.a.createElement(u.a,{exact:!0,path:N,component:O}),n.a.createElement(u.a,{exact:!0,path:f,component:T})))}}]),a}(l.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.cf68ab37.chunk.js.map