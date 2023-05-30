"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[15153],{425009:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i=JSON.parse('{"key":"v-4771f490","path":"/guide/installation/04_openhabian.html","title":"openHABian","lang":"en-US","frontmatter":{"pageClass":"content-page","next":"../configuration/"},"excerpt":"","headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Update","slug":"update","link":"#update","children":[]}],"git":{"updatedTime":1685428958000},"filePathRelative":"guide/installation/04_openhabian.md"}')},648697:(e,t,a)=>{a.r(t),a.d(t,{default:()=>l});var i=a(166252);const n=[(0,i.uE)('<h1 id="openhabian" tabindex="-1"><a class="header-anchor" href="#openhabian" aria-hidden="true">#</a> openHABian</h1><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>If you are using openHABian on a Raspberry Pi then the installation is pretty easy:</p><ol><li>Launch the configuration utility with <code>sudo openhabian-config</code>.</li><li>Under &quot;Select Branch&quot; choose option &quot;main&quot;.</li><li>Go to &quot;optional components&quot;.</li><li>If you don&#39;t have a MQTT-server yet, then first choose Mosquitto and follow the instructions. After installation of Mosquitto come back to the &quot;optional components&quot; and select &quot;Zigbee2MQTT&quot;.</li><li>After selecting your Zigbee USB adapter you have to enter your MQTT username and if necessary a password.</li><li>After about 3 to 4 minutes Zigbee2MQTT should be up and running. You can test if the configuration page is available on port 8081.</li></ol><h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> Update</h2><ol><li>Go to &quot;optional components&quot;.</li><li>Select &quot;Zigbee2MQTT&quot;.</li><li>After are asked if you want to update.</li><li>After about 3 to 4 minutes Zigbee2MQTT should be up and running. You can test if the configuration page is available on port 8081.</li></ol>',6)],o={},l=(0,a(983744).Z)(o,[["render",function(e,t){return(0,i.wg)(),(0,i.iD)("div",null,n)}]])}}]);