if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'git-do-not-ignore-web'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'git-do-not-ignore-web'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'git-do-not-ignore-web'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'git-do-not-ignore-web'.");
}
this['git-do-not-ignore-web'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var Unit = Kotlin.kotlin.Unit;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var br = $module$kotlinx_html_js.kotlinx.html.br_5bz84p$;
  var label = $module$kotlinx_html_js.kotlinx.html.label_yd75js$;
  var InputType = $module$kotlinx_html_js.kotlinx.html.InputType;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var throwCCE = Kotlin.throwCCE;
  var set_onKeyUpFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onKeyUpFunction_pszlq2$;
  var input = $module$kotlinx_html_js.kotlinx.html.input_e1g74z$;
  var div = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var textArea = $module$kotlinx_html_js.kotlinx.html.textArea_b1tfd9$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.js.div_wkomt5$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function GitDoNotIgnore() {
    GitDoNotIgnore_instance = this;
  }
  GitDoNotIgnore.prototype.getDoNotIgnoreString_61zpoe$ = function (filePath) {
    var tmp$;
    var folders = split(filePath, ['/']);
    var segments = ArrayList_init();
    for (var i = 0; i !== folders.size; ++i) {
      segments.add_11rb$(this.getFromZeroTo_0(i, folders));
    }
    var sb = StringBuilder_init();
    tmp$ = withIndex(segments).iterator();
    while (tmp$.hasNext()) {
      var segment = tmp$.next();
      if (segment.index !== (segments.size - 1 | 0)) {
        sb.append_gw00v9$('!' + segment.value + '/' + '\n');
        sb.append_gw00v9$(segment.value + '/*' + '\n');
      }
       else {
        sb.append_gw00v9$('!' + segment.value + '\n');
      }
    }
    return sb.toString();
  };
  GitDoNotIgnore.prototype.getFromZeroTo_0 = function (i, folders) {
    var sb = StringBuilder_init();
    for (var x = 0; x <= i; x++) {
      sb.append_gw00v9$(folders.get_za3lpa$(x)).append_gw00v9$('/');
    }
    var endIndex = sb.length - 1 | 0;
    return Kotlin.subSequence(sb, 0, endIndex).toString();
  };
  GitDoNotIgnore.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'GitDoNotIgnore',
    interfaces: []
  };
  var GitDoNotIgnore_instance = null;
  function GitDoNotIgnore_getInstance() {
    if (GitDoNotIgnore_instance === null) {
      new GitDoNotIgnore();
    }
    return GitDoNotIgnore_instance;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('GitDoNotIgnore');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.htmlFor = 'iFilePath';
    $receiver.unaryPlus_pdl1vz$('File path');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    var tmp$;
    genOutput((Kotlin.isType(tmp$ = it.target, HTMLInputElement) ? tmp$ : throwCCE()).value);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    set_id($receiver, 'iFilePath');
    $receiver.value = 'aDir/anotherDir/someOtherDir/aDir/bDir/cDir/a.txt';
    $receiver.placeholder = 'Paste your full file path here';
    set_onKeyUpFunction($receiver, main$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda($receiver) {
    label($receiver, void 0, main$lambda$lambda$lambda$lambda$lambda);
    input($receiver, InputType.text, void 0, void 0, void 0, 'form-control', main$lambda$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function main$lambda$lambda$lambda_0($receiver) {
    div($receiver, 'col-md-12', main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.htmlFor = 'taOutput';
    $receiver.unaryPlus_pdl1vz$('Output');
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    set_id($receiver, 'taOutput');
    $receiver.placeholder = 'Output will appear here';
    $receiver.disabled = true;
    $receiver.rows = '20';
    return Unit;
  }
  function main$lambda$lambda$lambda$lambda_0($receiver) {
    label($receiver, void 0, main$lambda$lambda$lambda$lambda$lambda_1);
    textArea($receiver, void 0, void 0, void 0, 'form-control', main$lambda$lambda$lambda$lambda$lambda_2);
    return Unit;
  }
  function main$lambda$lambda$lambda_1($receiver) {
    div($receiver, 'col-md-12', main$lambda$lambda$lambda$lambda_0);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    h1($receiver, void 0, main$lambda$lambda$lambda);
    br($receiver);
    div($receiver, 'row', main$lambda$lambda$lambda_0);
    br($receiver);
    div($receiver, 'row', main$lambda$lambda$lambda_1);
    return Unit;
  }
  function main$lambda($receiver) {
    div($receiver, 'container', main$lambda$lambda);
    return Unit;
  }
  function main$lambda_0(it) {
    var tmp$;
    var i = Kotlin.isType(tmp$ = document.getElementById('iFilePath'), HTMLInputElement) ? tmp$ : throwCCE();
    genOutput(i.value);
    return Unit;
  }
  function main() {
    var containerDiv = div_0(get_create(document), void 0, main$lambda);
    ensureNotNull(document.getElementsByTagName('body')[0]).appendChild(containerDiv);
    document.addEventListener('DOMContentLoaded', main$lambda_0);
  }
  function genOutput(input) {
    var tmp$;
    var taOutput = Kotlin.isType(tmp$ = document.getElementById('taOutput'), HTMLTextAreaElement) ? tmp$ : throwCCE();
    if (input.length > 0) {
      var output = GitDoNotIgnore_getInstance().getDoNotIgnoreString_61zpoe$(input);
      println(output);
      taOutput.value = output;
    }
     else {
      taOutput.innerText = '';
    }
  }
  Object.defineProperty(_, 'GitDoNotIgnore', {
    get: GitDoNotIgnore_getInstance
  });
  _.main = main;
  main();
  Kotlin.defineModule('git-do-not-ignore-web', _);
  return _;
}(typeof this['git-do-not-ignore-web'] === 'undefined' ? {} : this['git-do-not-ignore-web'], kotlin, this['kotlinx-html-js']);
