---
title: Profile
layout: profile-layout
---


<br>
{% for item in site.data.Anchal %}
<div align="center">
<img src="../assets/img/{{ item.img }}" class="pod-img" width="30%"/>
</div>
{% endfor %}

## Name
{% for item in site.data.Anchal %}
{{item.name}}
{% endfor %}

## Location

{% for item in site.data.Anchal %}
{{item.location}}
{% endfor %}



## University

{% for item in site.data.Anchal %}
{{item.university}}
{% endfor %}


## Description

{% for item in site.data.Anchal %}
{{item.description}}
{% endfor %}


## Favourite Programming Languages

{% for item in site.data.Anchal %}
{% for i in item.favlanguage %}
- {{i}}
{% endfor %}
{% endfor %}


## Interests Outside Of Technology

{% for item in site.data.Anchal %}

{{item.interests}}

{% endfor %}