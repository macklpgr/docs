!function(){
  var t="1753719177247x470950415467282400",
      e=new URLSearchParams(location.search),
      r="tracking_id="+t+"&url="+encodeURIComponent(location.href);
  document.referrer && (r += "&ref=" + encodeURIComponent(document.referrer));
  ["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(function(t){
    var n=e.get(t);
    n && (r += "&" + t + "=" + encodeURIComponent(n));
  });
  var n=new Image();
  n.src="https://track.trakkr.ai/pixel?" + r;
  n.style.display="none";
  document.body.appendChild(n);
}()