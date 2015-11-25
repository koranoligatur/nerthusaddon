/**
    Name: Nerthus Panel
    Plik zawiera funkcje do ustawiania tarczy otierającej panel
**/
try{

nerthus.panel = {}

nerthus.panel.display_icon = function()
{
    $('<img id="tarcza" src="'+nerthus.graf.shield+'" tip="Nerthus">').appendTo('#panel')
    .css({position:"absolute",top:"0px",left:"242px",cursor:"pointer"})
    .click(function(){nerthus.panel.display_panel()})
    .mouseover(function(){$(this).css('opacity','0.6')})
    .mouseout(function(){$(this).css('opacity','1')});
}

nerthus.panel.display_panel = function()
{
    $.getJSON("http://raw.githubusercontent.com/akrzyz/nerthusaddon/master/panel_links.json", function(panel_data)
    {
        var panel_str = nerthus.panel.panel_string(panel_data)
        mAlert(panel_str, 2, [function(){nerthus.panel.save()}])
        $('#n_pan_settings').click(function(){$("#n_pan_settings_str").toggle()})
    })
}

nerthus.panel.panel_string = function(panel_data)
{
    var str = '<center><b>Witaj na Nerthusie, zapraszamy na ' +
    this.link(panel_data.forum) + '</b><br>' +
    panel_data.panel_info + '<br>'
    for(var i in panel_data.links)
        str += this.link(panel_data.links[i]) + '<br>'
    str += '</center><br>' + this.settings_str()
    return str
}

nerthus.panel.settings_str = function()
{
    return '<u id="n_pan_settings" style="cursor:pointer">ustawienia</u>\
<div id="n_pan_settings_str" style="display:none;">\
<input type="checkbox" id="panCbNoc" '+ nerthus.options['night'] ? "checked" : "" +'/>Noc<br>\
<input type="checkbox" id="panCbPog" '+ nerthus.options['weather'] ? "checked" : "" +'/>Pogoda<br>\
</div>'
}

nerthus.panel.link = function(link)
{
    return '<a href="' + link.url + '" target="blank">' + link.name + '</a>'
}

nerthus.panel.save = function()
{
    var settings = nerthus.panel.get_settings()
    nerthus.storeSettings(settings)
    message('zapisano, wciśnij f5')
}

nerthus.panel.get_settings = function()
{
    var options = {}
    options['night'] = $('#panCbNoc').attr('checked')
    options['weather'] = $('#panCbPog').attr('checked')
    return options
}

g.loadQueue.push({fun:nerthus.panel.display_icon, data:""});

}catch(e){log('NerthusPanel Error: '+e.message,1);}
