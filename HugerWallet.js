function start(){
        setTimeout(async function(){
        var x=document.getElementById("All-pages")
        var y= document.getElementById("load-page")
        var m=localStorage.getItem("adress")
        var n=document.getElementById("wallet-page")
        var t=document.getElementById("secure-page")
        var s=document.getElementById("bottom-box")
        var tt=localStorage.getItem("wallet-pass")
        console.log(m)
        if (m==undefined){
        s.style.display="none"
        y.style.display="none"
        x.style.display="inline"
        document.getElementById("wall-pass-box").style.display="none"
        } else {
     if (tt==undefined){
        document.getElementById("wall-pass-box").style.display="none"
        } else {

			if(tt=="x"){
						document.getElementById("wall-pass-box").style.display="none"
			}else {
 document.getElementById("wall-pass-box").style.display="inline"
        }}
        y.style.display="none"
        x.style.display="inline"
        t.style.display="none"
        s.style.display="inline"
        n.style.display="inline"
        await wallet()
        
        
        
        }
        
        },500)}
        function addMore(){
        var x=document.getElementById("secure-page")
        var y=document.getElementById("wallet-page")
        document.getElementById("bottom-box").style.display="none"
        document.getElementById("setting-page").style.display="none"
        y.style.display="none"
        x.style.display="inline"
        
        }
        
        
        
        
        
        
        
        
        
        function swal(x,y,z,m,n,c){
        var alertBox=document.getElementById("alert-box")
        var alertI=document.getElementById("alert-i")
        var alertH=document.getElementById("alert-h")
        var alertT=document.getElementById("alert-t")
        var alertBtn=document.getElementById("alert-btn")
        
        alertBox.style.display=x
        alertI.innerHTML=y
        alertH.innerHTML=z
        alertT.innerHTML=m
        alertBtn.innerHTML=n
        alertI.style.color=c   
        if (x=="inline"){
        alertBtn.addEventListener("click",function(){
        alertBox.style.display="none"
        })
        
        }
        }
        
        function createAccount(){
        
        tronWeb.createAccount()
        .then (result => 
        localStorage.setItem("result",JSON.stringify(result.privateKey)))
        
        return localStorage.getItem("result").slice(1,65)
        
        
        
        
        
        }
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        function create(){
        
        swal("inline","cancel","Notice","Don't share your private keys","ok","red")
        var x= createAccount()
        var y= document.getElementById("key-page")
        var z=document.getElementById("keys")
        var m=document.getElementById("keys2")
        y.style.display="inline"
        z.innerHTML=x
        m.innerHTML=x
        z.addEventListener("click",function(){
        
        var copyText = m
        copyText.select()
        copyText.setSelectionRange(0, 99999); 
        document.execCommand("copy");
        swal("inline","check_circle","Copied","Don't share your clipboard texts.","Ok","#15C74B")
        
        })
        
        }
        function imported(){
        swal("inline","check_circle","Notice","Enter your private keys to import.","Ok","#15C74B")
        var y= document.getElementById("import-page")
        var z= document.getElementById("key-page")
        z.style.display="none"
        y.style.display="inline"
        
        var m=document.getElementById("import")
        var n=document.getElementById("import").value
        m.addEventListener("input",function(){
        
        localStorage.setItem("import",n)
        
        
        
        })
        
        
        }
        async function opened(){
        var m=document.getElementById("import").value
        if (m.length!=64){
        swal("inline","cancel","Invalid","Enter any valid keys","Ok","red")
        } else {
        
        
        await tronWeb.setPrivateKey(m)
        
        var a= await tronWeb.address.fromPrivateKey(m) 
        var b= await tronWeb.isAddress(a)
        if (b!=true){
        
        } else {
        swal("inline","check_circle","Success","Successfully imported","Great","#15C74B")
        await localStorage.setItem("import",m)
        console.log(m)
        await localStorage.setItem("adress",a)
        wallet()
        }}
        }
        async function boos(){
        
        var m=localStorage.getItem("keyM")
        await tronWeb.setPrivateKey(m)
        
        var a= await tronWeb.address.fromPrivateKey(m) 
        
                await localStorage.setItem("import",m)
        console.log(m)
        await localStorage.setItem("adress",a)
        wallet()
    
       
        
        }
        
        async function wallet(){
                var x=localStorage.getItem("adress")
        await many()
        var H=localStorage.getItem("H")
        var HH=parseFloat(H).toFixed(2)
        
        document.getElementById("token-2-amount").innerHTML=HH
        
        
        
        await tronWeb.trx.getBalance(x)
        .then(result => localStorage.setItem("balance",result/1000000))
        fetch('https://api.coingecko.com/api/v3/coins/tron')
        .then(resp => resp.json())
        .then(data =>
        localStorage.setItem("price",data.market_data.current_price.usd.toFixed(4)))
        var i=localStorage.getItem("price")
        var ii=parseFloat(i).toFixed(4)
        
        var HHH=parseFloat(HH*ii*100).toFixed(2)
        
        
        
        var y=localStorage.getItem("balance")
        var yy=parseFloat(y).toFixed(2)
        var z=document.getElementById("import-page")
        var m=document.getElementById("wallet-page")
        var n=document.getElementById("token-1-amount")
        var a=document.getElementById("wallet-value")
        
        var iiyy=ii*yy
        var iy=iiyy.toFixed(2)
        var TT=parseFloat(HHH)+parseFloat(iy)
        var TTT=parseFloat(TT).toFixed(2)
        
        document.getElementById("token-1-ex").innerHTML="$"+iy
        document.getElementById("token-2-ex").innerHTML="$"+HHH
        a.innerHTML=TTT+" USD"
        z.style.display="none"
   document.getElementById("secure-page").style.display="none"
        document.getElementById("bottom-box").style.display="inline"
        m.style.display="inline"
        n.innerHTML=yy
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        bugy()
        
        
        
        }
        async function bugy() {
        
        await many()
        
        
        
        var m=document.getElementById("wallet-page")
        var x=localStorage.getItem("adress")
        await tronWeb.trx.getBalance(x)
        .then(result => localStorage.setItem("balance",result/1000000))
        var y=localStorage.getItem("balance")
        var yy=parseFloat(y).toFixed(2)
        var n=document.getElementById("token-1-amount")
        n.innerHTML=yy
        var i=localStorage.getItem("price")
        var ii=parseFloat(i).toFixed(4)
        var iiyy=ii*yy
        var iy=iiyy.toFixed(2)
        var a=document.getElementById("wallet-value")
        var H=localStorage.getItem("H")
        var HH=parseFloat(H).toFixed(2)
        var HHH=parseFloat(HH*ii*100).toFixed(2)
        var TT=parseFloat(HHH)+parseFloat(iy)
        
        var TTT=parseFloat(TT).toFixed(2)
        
        
        
        document.getElementById("token-1-ex").innerHTML="$"+iy
        document.getElementById("token-2-ex").innerHTML="$"+HHH
        
        
        document.getElementById("token-2-amount").innerHTML=HH
        a.innerHTML=TTT+" USD"
        bug()
        }
        
        
        
        
        
        
        
        
        
        
        
        function action(){
        var x=document.getElementById("select-page")
        var y=document.getElementById("wallet-page")
        var z=document.getElementById("send")
        
        x.style.display="inline"
        y.style.display="none"
        
        
        
        z.addEventListener("click",function(){
        
        send()
        
        })
        
        
        
        
        
        
        }
        async function back(x,t){
        var t=document.getElementById(t)
        var m=document.getElementById(x)
        var n=document.getElementById("wallet-page")
        
        t.style.display="none"
        m.style.display="none"
        n.style.display="inline"
        
        }
        async function back2(x,t,d){
        var t=document.getElementById(t)
        var m=document.getElementById(x)
        var k=document.getElementById(d)
        var n=document.getElementById("wallet-page")
        
        t.style.display="none"
        m.style.display="none"
        n.style.display="inline"
        k.style.display="none"
        }
        function send(){
        swal("inline","check_circle","Notice","Click on send after confirmation","ok","#15C74B")
        var x=document.getElementById("send-page")
        var y=document.getElementById("select-page")
        x.style.display="inline"
        y.style.display="none"
        
        
        }
        async function sendC(){
        var x=document.getElementById("recept").value
        var y=document.getElementById("send-number").value
        var z=localStorage.getItem("balance")
        if (x.length!=34){
        swal("inline","cancel","Invalid","Enter any valid address","Ok","red")
        
        } else {
        
        if ( parseFloat(z) < y){
        swal("inline","cancel","Insufficient","You don't have enough","Ok","red")
        
        } else {
        
        await localStorage.setItem("address",x)
        await localStorage.setItem("amount",y)
        
        
        
        await hi(""+x+"",y*1000000) .catch(err => swal("inline","cancel","Error",err,"Ok","red"))
        
        
        
       
        
        
        
        
        
        
        }}
        }
        
        
        
        async function hi(to,amount){
        const private=localStorage.getItem("import")
        const from =localStorage.getItem("adress")
        const options =1 
        
        tradeobj = await tronWeb.transactionBuilder.sendTrx(
        to,
        amount,
        from
        );
        const signedtxn = await tronWeb.trx.sign(
        tradeobj,
        private
        );
        const receipt = await tronWeb.trx.sendRawTransaction(
        signedtxn
        
        
        );
        var yen= JSON.stringify(receipt.txid)
      
        
        swal("inline","check_circle","Success","Transaction ID :"+" "+yen.slice(1,65),"ok","#15C74B")
        
        bug()
        localStorage.setItem("lastT",yen.slice(1,65))
        }
        
        async function bug() {
        
        await many()
        
        
        var x=localStorage.getItem("adress")
        await tronWeb.trx.getBalance(x)
        .then(result => localStorage.setItem("balance",result/1000000))
        var y=localStorage.getItem("balance")
        var yy=parseFloat(y).toFixed(2)
        var n=document.getElementById("token-1-amount")
        n.innerHTML=yy
        var i=localStorage.getItem("price")
        var ii=parseFloat(i).toFixed(4)
        var iiyy=ii*yy
        var iy=iiyy.toFixed(2)
        var a=document.getElementById("wallet-value")
        var H=localStorage.getItem("H")
        var HH=parseFloat(H).toFixed(2)
        var HHH=parseFloat(HH*ii*100).toFixed(2)
        var TT=parseFloat(HHH)+parseFloat(iy)
        var TTT=parseFloat(TT).toFixed(2)
        document.getElementById("token-1-ex").innerHTML="$"+iy
        document.getElementById("token-2-ex").innerHTML="$"+HHH
        
        
        
        
        
        document.getElementById("token-2-amount").innerHTML=HH
        a.innerHTML=TTT+" USD"
        bugy()
        
        }
        function receive(){
        
        var x=document.getElementById("receive-page")
        x.style.display="inline"
        
        var y=document.getElementById("receive-page-adrs")
               
        const f =localStorage.getItem("adress")
        y.innerHTML=f
        
        
        var mmm=document.getElementById("receive-page-btn")
        mmm.innerHTML="Copy Public Address"
        mmm.style.opacity="1"
        
        
        //const f =localStorage.getItem("adress")
        //uCopy(f)
       /*swal("inline","check_circle","Copied","Share your public address to receive funds","ok","#15C74B")*/
        
        receiveMax(f)
        }
function receiveMax(x){

fetch("https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data="+x)
  .then(res=>{return res.blob()})
  .then(blob=>{
    var img = URL.createObjectURL(blob);
    // Do whatever with the img
    document.getElementById('receive-page-img').setAttribute('src', img);
  })


}


        function copyAdrs(){
        
        const f =localStorage.getItem("adress")
       uCopy(f)
      //swal("inline","check_circle","Copied","Share your public address to receive funds","ok","#15C74B")
        
        var x=document.getElementById("receive-page-btn")
        x.innerHTML="Copied"
        x.style.opacity="0.2"
       
        
        }
       
        async function uCopy(x){
        document.getElementById("universal-copy").value=x
        var copyText=document.getElementById("universal-copy")
        copyText.select()
        copyText.setSelectionRange(0, 99999); 
        document.execCommand("copy");
        
        }
        async function max(){
        var x=localStorage.getItem("adress")
        await tronWeb.trx.getBalance(x)
        .then(result => localStorage.setItem("balance",result/1000000))
        var y=localStorage.getItem("balance")
        var z=document.getElementById("send-number")
        z.value=y
        
        }
        async function max2(){
        await many()
        var x=localStorage.getItem("H")
        var y=parseFloat(x).toFixed(2)
        
        var z=document.getElementById("send2-number")
        z.value=y
        
        }
        
        async function many() {
        const ACCOUNT = localStorage.getItem("adress")
        
        const CONTRACT="TXHB6y9dwjHAP4gSVpv1fo7h5ghWStYYg8"
        const {
        abi
        } = await tronWeb.trx.getContract(CONTRACT);
        const contract = tronWeb.contract(abi.entrys, CONTRACT);
        
        const balance = await contract.methods.balanceOf(ACCOUNT).call();
        localStorage.setItem("H",parseFloat(balance.toString())/parseInt("1000000000000000000"))
        
        }
        
        function action2(){
        var x=document.getElementById("select2-page")
        var y=document.getElementById("wallet-page")
        var z=document.getElementById("send")
        
        x.style.display="inline"
        y.style.display="none"
        
        
        
        
        }
        
        
        
        function send2(){
        swal("inline","check_circle","Notice","Make sure you have atleast 1 TRX for transaction fee.","ok","#15C74B")
        var x=document.getElementById("send2-page")
        var y=document.getElementById("select2-page")
        
        x.style.display="inline"
        y.style.display="none"
        
        
        
        }
        
        
        
        
        async function sendC2(){
        var x=document.getElementById("recept2").value
        var y=document.getElementById("send2-number").value
        await many()
        var z=localStorage.getItem("H")
        var m=localStorage.getItem("balance")
        
        if (x.length!=34){
        swal("inline","cancel","Invalid","Enter any valid address","Ok","red")
        
        } else {
        
        if ( parseFloat(z) < y){
        swal("inline","cancel","Insufficient","You don't have enough","Ok","red")
        
        } else {
        if (parseFloat(m) < 1.2){
        swal("inline","cancel","Insufficient Fee","You don't have enough Tron for fee.","Ok","red")
        
        } else {
        
        await localStorage.setItem("address",x)
        await localStorage.setItem("amount",y)
        
        
        
        await hi2(""+x+"",y).catch(err => swal("inline","cancel","Error",err,"Ok","red"))
        
        
        
        
        
        
        
        
        
        
        }}}
        }
        
        async function hi2(to,amount) {
        
        const CONTRACT="TXHB6y9dwjHAP4gSVpv1fo7h5ghWStYYg8"
        var mtt=[""+amount+"","000000000000000000"]
        
        var mt=1000000000000000000
        var mttt=amount*mt
        var mtttt=""+mttt+""
        
        
        
        const {
        abi
        } = await tronWeb.trx.getContract(CONTRACT);
        const contract = tronWeb.contract(abi.entrys, CONTRACT);
        
        
        const resp = await contract.methods.transfer(to, mtttt).send();
        //document.write("transfer:", resp);
        swal("inline","check_circle","Success","TxId :"+resp,"ok","#15C74B")
        
        
        localStorage.setItem("lastT",resp)
        
        
        }
        
        
        
        function items(x,y,z,m){
        
        document.getElementById("wallet-b-box-i"+x).style.color="#0080FF"
        document.getElementById("wallet-b-box-i"+y).style.color="#68798D"
        document.getElementById("wallet-b-box-i"+z).style.color="#68798D"
        document.getElementById("wallet-b-box-i"+m).style.color="#68798D"
        
        var xx=document.getElementById("wallet-page")
        var yy=document.getElementById("secure-page")
        var zz=document.getElementById("cloud-page")
       
        var mm=document.getElementById("setting-page")
        
        var nn=document.getElementById("swap-page")
        
        
        if (x==1){
        xx.style.display="inline"
        zz.style.display="none"
        yy.style.display="none"
        mm.style.display="none"
        nn.style.display="none"
        } else {
        
        if (x==2){
        menu2()
        xx.style.display="none"
        yy.style.display="none"
        zz.style.display="inline"
        mm.style.display="none"
        nn.style.display="none"
        
        } else {
        
        
        if (x==3) {
        
        xx.style.display="none"
        yy.style.display="none"
        zz.style.display="none"
        mm.style.display="none"
        nn.style.display="inline"
        
        } else {
        
        xx.style.display="none"
        yy.style.display="none"
        zz.style.display="none"
        mm.style.display="inline"
        nn.style.display="none"
        settingM()
        
        }}}
        
        
        }
        
        function settingM() {
        var xx=document.getElementById("wallet-page")
        var yy=document.getElementById("secure-page")
        var zz=document.getElementById("cloud-page")
       
        var mm=document.getElementById("setting-page")
        
        var nn=document.getElementById("swap-page")
        var x=document.getElementById("wall-pass-box")
       if(x.style.display=="inline") {
       				
        xx.style.display="none"
        yy.style.display="none"
        zz.style.display="none"
        mm.style.display="none"
        nn.style.display="none"
       }else {
       				xx.style.display="none"
        yy.style.display="none"
        zz.style.display="none"
        mm.style.display="inline"
        nn.style.display="none"
       }
        				
        }
        
        function cloudC(){
        var x=document.getElementById("c-l-1")
        if (x.src!="https://i.postimg.cc/15vM4mh2/Logopit-1608973640094.png"){
        
        x.src="https://i.postimg.cc/15vM4mh2/Logopit-1608973640094.png"
        } else {
        
        x.src="https://i.postimg.cc/Vk51pkWF/Logopit-1608972078759.png"
        
        
        
        }
        
        
        
        }
        
        async function menu2(){
        var x=document.getElementById("cloud-rate-4")
        var y=document.getElementById("cloud-rate-5")
        var z=localStorage.getItem("price")
        var zz=parseFloat(z)*100
        var zzz=parseFloat(zz).toFixed(2)
        
        
        x.innerHTML="$"+zzz+""
        await fetch('https://api.coingecko.com/api/v3/coins/tron?market_data=true')
        .then(resp => resp.json())
        .then(data =>
        localStorage.setItem("percent",JSON.stringify(data.market_data.price_change_percentage_24h_in_currency.usd)))
        
        
        
        var nn=localStorage.getItem("percent")
        var nnn=parseFloat(nn)
        var nnnn=nnn.toFixed(2)
        y.innerHTML=nnnn+"%"
        var tt=document.getElementById("cloud-rate-box")
        if (nnnn < 0){
        
        tt.style.background="red"
        } else {
        
        tt.style.background="#249E6D"
        y.innerHTML="+"+nnnn+"%"
        }
        
        }
        
        function SendTop(){
        
        swal("inline","check_circle","Notice","Click on below tokens to call any methods.","ok","#15C74B")
        
        
        }
        function addPass() {
        
        var y=document.getElementById("setting-set-box")
        y.style.display="inline"
        		
        				y
        				
        }
        
        
        function setEnd(x){
        				if (x==undefined){
        				var y=document.getElementById("setting-set-box")
        				y.style.display="none"
        								
        			} else {	
        								var z=document.getElementById(x)
        				z.style.display="none"
        				}
        }
        function setPass() {
        				var x=document.getElementById("setting-set-pass").value
   var y= document.getElementById("setting-set-pass2").value			
        				
        				if(x=="cancel"){
        				localStorage.setItem("wall-pass","cancel")
        				
        				
        			} else {
        				if(x.length<6) {
        								swal("inline","cancel","Error","Enter Minimum 6 passwords","Ok","red")
        
        				}else {
        					if(x!=y) {
        							swal("inline","cancel","Error","Passwords aren't matched","Ok","red")	
        					
        									
        									
        					}else {
        									
        							localStorage.setItem("wallet-pass",x)
        									
        									swal("inline","check_circle","Success","Your passwords has been added.","ok","#15C74B")
        									
        			setEnd()						
        					}}}
        												
        								
        				
        		
        		
        		
        		
        				
        }
        function setPass2(){
        var x=localStorage.getItem("wallet-pass")
        var y=document.getElementById("wall-pass-pass").value
        
        if(y!=x) {
        				swal("inline","cancel","Invalid","Passwords aren't matched","Ok","red")	
        					
        }else {
        document.getElementById("wall-pass-box").style.display="none"
        document.getElementById("setting-page").style.display="inline"
        				
        }
        
       }
       
       function removePass() {
       				localStorage.setItem("wallet-pass","x")
       				swal("inline","check_circle","Success","Your passwords has been removed.","ok","#15C74B")
       				
       }
       
   function SetTrans(){
        var x=localStorage.getItem("lastT")
        if(x==undefined) {
        				swal("inline","cancel","Not found","There is no transaction found.","Ok","red")	
        }else {
        				window.open("https://tronscan.org/#/transaction/"+x+"")
        }
        
        }
        function changeP() {
        				var x=document.getElementById("swap-token-1")
        		var y=document.getElementById("swap-token-2")
        		var z=document.getElementById("swap-token-1-t")
    var zz=    		document.getElementById("swap-token-1-t2")		
        
        var m=				document.getElementById("swap-token-2-t")
        		var mm=		document.getElementById("swap-token-2-t2")
        				
        			
        		if(x.src!="https://i.postimg.cc/YS4Qt4hB/Logopit-1607942865519.png") {
        						
        						x.src="https://i.postimg.cc/YS4Qt4hB/Logopit-1607942865519.png"
 y.src="https://i.ibb.co/f0Sf99r/Logopit-1606069190504.png"       	
 					z.innerHTML="HS"
 					zz.innerHTML="HugerSwap"
 					m.innerHTML="TRX"
 					mm.innerHTML="Tron"
 				calcC()
        						
        		}else {
        						y.src="https://i.postimg.cc/YS4Qt4hB/Logopit-1607942865519.png"
 x.src="https://i.ibb.co/f0Sf99r/Logopit-1606069190504.png"   
 m.innerHTML="HS"
 					mm.innerHTML="HugerSwap"
 					z.innerHTML="TRX"
 					zz.innerHTML="Tron"
 calcC()
        		}	
        			
        			
        				
        }
function calcC() {
        				var xx=document.getElementById("swap-token-1")
        		var yy=document.getElementById("swap-token-2")
				var x=document.getElementById("swap-from")
        		var y=document.getElementById("swap-to")
        		
        	if(xx.src!="https://i.postimg.cc/YS4Qt4hB/Logopit-1607942865519.png") {
        					y.value=parseFloat(x.value)/100
        					
        	}else {
        					
        				y.value=parseFloat(x.value)*100
        					
        	}
        		
        		
}
function convert() {
						var xx=document.getElementById("swap-token-1")
        		var yy=document.getElementById("swap-token-2")
        			if(xx.src!="https://i.postimg.cc/YS4Qt4hB/Logopit-1607942865519.png") {
        		convertC()			
        					
        	}else {
        					
        				
        					
        	
				swal("inline","cancel","Not Available","Convert isn't available currently.","Ok","red")	
				}
}
async function convertC() {
				var x=document.getElementById("swap-from").value
        		var y=document.getElementById("swap-to").value
        		var z=localStorage.getItem("balance")
        		if (x < 1){
        swal("inline","cancel","Error","Minimum Convert limit is 1 Unit","Ok","red")				
        		} else {
        		if(parseFloat(z)< x){
        						swal("inline","cancel","Error","Insufficient balance for converting.","Ok","red")		
        		} else {
        		var inh=localStorage.getItem("adress")
await hi("TMMQoHFZSjzXMoZ8kgVxUGnTJwsSUC1MAa",x*1000000) .catch(err => swal("inline","cancel","Error",err,"Ok","red"))
	await hi3(""+inh+"",y)			
				
				
				
				swal("inline","check_circle","Success","The convert has been completed","ok","#15C74B")
				}
				}
				
				
				
				
				
				
}
async function hi3(to,amount) {
        const HttpProvider = TronWeb.providers.HttpProvider;
     const fullNode = new HttpProvider("https://api.trongrid.io");
     const solidityNode = new HttpProvider("https://api.trongrid.io");
     const eventServer = new HttpProvider("https://api.trongrid.io");
     const privateKey = "2c1c8f8b22bdba7ad1d571c0847c46bfdfd9d02b2083e4ec9c3d3203987ef9b5";
     const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey)
        const CONTRACT="TXHB6y9dwjHAP4gSVpv1fo7h5ghWStYYg8"
        var mtt=[""+amount+"","000000000000000000"]
        
        var mt=1000000000000000000
        var mttt=amount*mt
        var mtttt=""+mttt+""
        
        
        
        const {
        abi
        } = await tronWeb.trx.getContract(CONTRACT);
        const contract = tronWeb.contract(abi.entrys, CONTRACT);
        
        
        const resp = await contract.methods.transfer(to, mtttt).send();
        //document.write("transfer:", resp);
        
        
        
        localStorage.setItem("lastT",resp)
        
        
        }
        
















function SetIns() {
var x=document.getElementById("backup-box")
x.style.display="inline"
var y=localStorage.getItem("import")
document.getElementById("bck").innerHTML=y
				
}
async function addW() { document.getElementById("wallets-page").style.display="inline"

				
}

function addMT() {
var x=localStorage.getItem("adress")
swal("inline","check_circle","Accessing","Your wallet on tronscan","ok","#15C74B")
window.open("https://tronscan.org/#/address/"+x+"")
				
}
function SetGift() {
				swal("inline","check_circle","comming soon","Airdrop will be available soon","ok","#15C74B")
}
