
const block = () => {
    return `
    <div class="container">
    <div class="img">
        <marquee behavior="scroll" scrollamount="10" direction="left"><span id="main_text">404</span></marquee>
        <span id="sub_text">ERROR IN THE SERVER ! COME HERE AFTER SOME TIME :)</span>
    </div>
<button onclick="window.history.back()">go back</button>
</div>
    `
}
const style = () =>{
    return `
    <style>
  *{
        font-family: sans-serif;
  }
    .container{
        position: absolute;
        top: 50%;
        left: 50%;
       transform: translate(-50%,-50%);
        display: grid;
        place-items: center;
 
    }
    button{
        border: none;
    width: 100px;
    height: 30px;
    background: #ff0000d9;
    color: white;
    font-family: system-ui;
    text-transform: capitalize;
    font-weight: 800;
    box-shadow: 6px 4px 0px 0px #cfcfcf;
    transition: all 0.3s easy 0s;
    cursor: pointer;
    }
    button:hover{
    transform: scale(1.2);
    }
    .img{
        width: 400px;
        height: 320px;
        text-align: center;
    }
    #main_text{
        font-size: 222px;
        COLOR: RED;
    text-shadow: 9px 2px 9px #00000030;
    }
    #sub_text
    {
        font-weight: 600;
    line-height: 23px;
    letter-spacing: 2px;
    }
</style>`
} 



switch (window.location.hostname) {
    case "www.zee5.com":
        document.head.innerHTML = style();
        document.body.innerHTML = block();
        break;
        case "www.youtube.com":
            document.head.innerHTML = style();
            document.body.innerHTML = block();
            break;
        case "www.facebook.com":
            document.head.innerHTML = style();
            document.body.innerHTML = block();
            break;
                case "www.netflix.com":
                    document.head.innerHTML = style();
                    document.body.innerHTML = block();
                    break;
                    case "www.primevideo.com":
                        document.head.innerHTML = style();
                        document.body.innerHTML = block();
                        break;
                        case "www.instagram.com":
                            document.head.innerHTML = style();
                            document.body.innerHTML = block();
                            break;
    default:
        break;
}