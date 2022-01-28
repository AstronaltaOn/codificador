
//OBTER LINK DA SUBPAGE
function openPg(){
var idSublink = document.getElementById('unit-iframe');
var subLink = idSublink.getAttribute('src');
open(subLink);
}

//GET URL DO VIDEO #MODELO 1
function mp4Url(){
var groupDivs = document.getElementsByClassName('video has-captions is-captions-rendered is-initialized');
var targDiv = groupDivs[0];
var mp4Url = targDiv.getAttribute('data-metadata');
console.log(mp4Url.slice(mp4Url.indexOf('["https')+2,mp4Url.indexOf('.mp4')+5)); 
}

//GET URL DO VIDEO #MODELO 2
function mp4Url(){
    var groupDivs = document.getElementsByClassName('video has-captions is-captions-rendered is-initialized'); // a class pode variar
    var targDiv = groupDivs[0];
    var mp4Url = targDiv.getAttribute('data-metadata');
    console.log(mp4Url.slice(875,946)); // as coodernadas podem variar
    }

//variações conhecidas de CLASS
   //'video has-captions is-captions-rendered is-initialized'
    //'video has-captions is-initialized is-captions-rendered'
   //'video is-initialized is-captions-rendered'

//variações conhecidas do SLICE
    // mp4Url.slice(875,946) ## usar quando retorna vazio
    // mp4Url.slice(mp4Url.indexOf('["https')+2,mp4Url.indexOf('.mp4')+5)
    // mp4Url.slice(mp4Url.indexOf(', "https://edx-video.net/')+3,mp4Url.indexOf('.mp4')+4)

/*=================================================================
//                           BAIXAR SRT
===================================================================*/
function srt(){
var groupDivs = document.getElementsByClassName('video has-captions is-captions-rendered is-initialized')
var targDiv = groupDivs[0]
var mp4Url = targDiv.getAttribute('data-metadata')
var domain = "https://courses.edx.org/courses/course-v1"
var ibmCod = mp4Url.slice(429,449)
var xBlock = "/xblock/block-v1"
var typeBlock = "+type@video+block@"

var token = document.getElementsByClassName('video has-captions is-captions-rendered is-initialized')
token = token[0];
token = token["id"].slice(6)
var fechamento = "/handler/transcript/download"
var srt = String(domain+ibmCod+xBlock+ibmCod+typeBlock+token+fechamento)
open(srt)
}

//=================================================================   
    //                FUNÇÕES SOLTAS
//==================================================================
    //OBTER TOKEN
function scrap(){
    var token = document.getElementsByClassName('video has-captions is-captions-rendered is-initialized');
    token = token[0];
    token = token["id"].slice(6);
    }