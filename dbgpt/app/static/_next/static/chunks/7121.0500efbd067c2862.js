"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7121],{47578:function(e,E,n){n.d(E,{Ht:function(){return t},Lx:function(){return A},Pf:function(){return R},k8:function(){return S},lW:function(){return I},yD:function(){return a}});var T=n(812);function A(e,E){return{label:e,range:E,insertText:e,kind:T.Mj.CompletionItemKind.Keyword}}function R(e,E="",n=!1,A){let R=n?[E,e].filter(Boolean).join("."):e;return{label:{label:R,description:"Table",detail:" "+E},range:A,insertText:R,kind:T.Mj.CompletionItemKind.Class}}function a(e,E,n="",A){let R=[n,E].filter(Boolean).join(".");return{label:{label:e,description:"Column",detail:" "+R},range:A,insertText:e,kind:T.Mj.CompletionItemKind.Field}}function t(e,E){var n,A;let R=(null===(n=e.params)||void 0===n?void 0:n.map((e,E)=>`\${${E+1}:${"string"==typeof e?e:e.name}}`).join(", "))||"",a=(null===(A=e.params)||void 0===A?void 0:A.map((e,E)=>`${"string"==typeof e?e:e.name}`).join(", "))||"";return{label:{label:e.name,description:"Function",detail:" "+e.desc},kind:T.Mj.CompletionItemKind.Function,documentation:`${e.name}(${a})`,insertText:`${e.name}(${R})`,insertTextRules:T.Mj.CompletionItemInsertTextRule.InsertAsSnippet,range:E}}function S(e,E){return{label:e.label,kind:T.Mj.CompletionItemKind.Snippet,documentation:e.documentation,insertText:e.insertText,insertTextRules:T.Mj.CompletionItemInsertTextRule.InsertAsSnippet,range:E}}function I(e,E){return{label:e,kind:T.Mj.CompletionItemKind.Module,detail:"Schema",insertText:e,range:E}}},54768:function(e,E,n){n.d(E,{q:function(){return T}});class T{constructor(e){{let E=URL.createObjectURL(new Blob([`importScripts(${JSON.stringify(e.toString())});`],{type:"application/javascript"}));this.worker=new Worker(E),URL.revokeObjectURL(E)}}getWorker(){return this.worker}}},5601:function(e,E,n){n.d(E,{X:function(){return t},m:function(){return a}});var T=n(81065),A=function(e,E,n,T){return new(n||(n=Promise))(function(A,R){function a(e){try{S(T.next(e))}catch(e){R(e)}}function t(e){try{S(T.throw(e))}catch(e){R(e)}}function S(e){var E;e.done?A(e.value):((E=e.value)instanceof n?E:new n(function(e){e(E)})).then(a,t)}S((T=T.apply(e,E||[])).next())})};function R(e,E,R){return A(this,void 0,void 0,function*(){let{SQLType:A,plugins:a}=yield Promise.all([n.e(2425),n.e(4849),n.e(7356),n.e(1414),n.e(1586),n.e(8010),n.e(7816)]).then(n.bind(n,19357)),t={[T.$.OB_MySQL]:A.OBMySQL,[T.$.MySQL]:A.MySQL,[T.$.OB_Oracle]:A.Oracle},S=a.format({sql:e,type:t[E],delimiter:R});return S})}class a{constructor(e,E){this.plugin=null,this.type=T.$.OB_MySQL,this.plugin=e,this.type=E}provideDocumentFormattingEdits(e,E,n){let T=e.getValue(),a=e.getFullModelRange();return new Promise(E=>A(this,void 0,void 0,function*(){var n,A;let t=yield R(T,this.type,(null===(A=null===(n=this.plugin)||void 0===n?void 0:n.modelOptionsMap.get(e.id))||void 0===A?void 0:A.delimiter)||";");E([{range:a,text:t}])}))}}class t{constructor(e,E){this.plugin=null,this.type=T.$.OB_MySQL,this.plugin=e,this.type=E}provideDocumentRangeFormattingEdits(e,E,n,T){let a=e.getValueInRange(E);return new Promise(n=>A(this,void 0,void 0,function*(){var n,T;let A=yield R(a,this.type,(null===(T=null===(n=this.plugin)||void 0===n?void 0:n.modelOptionsMap.get(e.id))||void 0===T?void 0:T.delimiter)||";");return[{range:E,text:A}]}))}}},87121:function(e,E,n){n.r(E),n.d(E,{setup:function(){return C}});var T=n(812),A=n(81065),R=n(47578);let a=[{name:"ABS",params:[{name:"numeric_expression"}],desc:"返回指定数值表达式的绝对值（正值）的数学函数。ABS 将负值更改为正值，对零或正值没有影响。"},{name:"ACOS",params:[{name:"numeric_expression"}],desc:"返回以弧度表示的角，其余弦为指定的 NUMBER 表达式，也称为反余弦。"},{name:"ASIN",params:[],desc:"",isNotSupport:!0},{name:"ATAN",params:[],desc:"",isNotSupport:!0},{name:"ATAN2",params:[],desc:"",isNotSupport:!0},{name:"BITAND",params:[{name:"nExpression1"},{name:"nExpression2"}],desc:"运算符按位进行“与”操作。输入和输出类型均为 NUMBER 数据类型。"},{name:"CEIL",params:[{name:"numeric_expression"}],desc:"返回值大于等于数值 numeric_expression 的最小整数。"},{name:"COS",params:[],desc:"",isNotSupport:!0},{name:"COSH",params:[],desc:"",isNotSupport:!0},{name:"EXP",params:[{name:"numeric_expression"}],desc:"返回 e 的 numeric_expression 次幂（e 为数学常量，e = 2.71828183... ）。"},{name:"FLOOR",params:[{name:"numeric_expression"}],desc:"返回小于等于数值 numeric_expression 的最大整数。"},{name:"LN",params:[{name:"numeric_expression"}],desc:"返回以 e 为底的 numeric_expression 的对数（e 为数学常量 e = 2.71828183...）。"},{name:"LOG",params:[{name:"x"},{name:"y"}],desc:"返回以 x 为底的 y 的对数。"},{name:"MOD",params:[{name:"x"},{name:"y"}],desc:"返回 x 除以 y 的余数。"},{name:"POWER",params:[{name:"x"},{name:"y"}],desc:"返回 x 的 y 次幂。"},{name:"REMAINDER",params:[{name:"x"},{name:"y"}],desc:"返回 x 除以 y 的余数。"},{name:"ROUND",params:[{name:"numeric"},{name:"decimal"}],desc:"返回参数 numeric 四舍五入后的值。"},{name:"SIGN",params:[{name:"n"}],desc:"返回数字 n 的符号，大于 0 返回 1，小于 0 返回 -1 ，等于 0 返回 0。"},{name:"SIN",params:[],desc:"",isNotSupport:!0},{name:"SINH",params:[],desc:"",isNotSupport:!0},{name:"SQRT",params:[{name:"n"}],desc:"返回 n 的平方根。"},{name:"TAN",params:[],desc:"",isNotSupport:!0},{name:"TANH",params:[],desc:"",isNotSupport:!0},{name:"TRUNC",params:[{name:"numberic"},{name:"precision"}],desc:"返回 numberic 按精度 precision 截取后的值。"},{name:"WIDTH_BUCKET",params:[],desc:"",isNotSupport:!0},{name:"CHR",params:[{name:"n"}],desc:"将 n 转换为等价的一个或多个字符返回，且返回值与当前系统的字符集相关。"},{name:"CONCAT",params:[{name:"c1"},{name:"c2"}],desc:"连接两个字符串。"},{name:"INITCAP ",params:[{name:"c1"}],desc:"返回字符串并将字符串中每个单词的首字母大写，其他字母小写。"},{name:"LOWER",params:[{name:"c1"}],desc:"将字符串全部转为小写。"},{name:"LPAD ",params:[{name:"c1"},{name:"n"},{name:"c2"}],desc:"在字符串 c1 的左边用字符串 c2 填充，直到长度为 n 时为止。"},{name:"LTRIM",params:[{name:"c1"},{name:"c2"}],desc:"删除左边出现的字符串。"},{name:"REGEXP_REPLACE",params:[{name:"source_char"},{name:"pattern"},{name:"replace_string"},{name:"position"},{name:"occurrence"},{name:"match_param"}],desc:"正则表达式替换。"},{name:"REGEXP_SUBSTR",params:[],desc:"",isNotSupport:!0},{name:"REPLACE",params:[{name:"c1"},{name:"c2"},{name:"c3"}],desc:"将字符表达式值中，部分相同字符串，替换成新的字符串。"},{name:"RPAD",params:[{name:"c1"},{name:"n"},{name:"c2"}],desc:"在字符串 c1 的右边用字符串 c2 填充，直到长度为 n 时为止。"},{name:"RTRIM",params:[{name:"c1"},{name:"c2"}],desc:"删除右边出现的字符串，此函数对于格式化查询的输出非常有用。"},{name:"SUBSTR ",params:[{name:"c1"},{name:"n1"},{name:"n2"}],desc:"截取子字符串。其中多字节符（汉字、全角符等）按 1 个字符计算。"},{name:"TRANSLATE",params:[{name:"c1"},{name:"c2"},{name:"c3"}],desc:"将字符表达式值中，指定字符替换为新字符。多字节符（汉字、全角符等），按 1 个字符计算。"},{name:"TRIM ",body:"TRIM(${1:trim_character} FROM ${2:trim_source})",desc:"删除一个字符串的开头或结尾（或两者）的字符。"},{name:"UPPER",params:[{name:"c1"}],desc:"将字符串全部转为大写。"},{name:"ASCII",params:[{name:"x"}],desc:"返回字符表达式最左端字符的 ASCII 码值。"},{name:"INSTR",params:[{name:"c1"},{name:"c2"},{name:"i"},{name:"j"}],desc:"在一个字符串中搜索指定的字符，返回发现指定的字符的位置。"},{name:"LENGTH",params:[{name:"c1"}],desc:"返回字符串的长度。"},{name:"REGEXP_COUNT",params:[],desc:"",isNotSupport:!0},{name:"REGEXP_INSTR",params:[],desc:"",isNotSupport:!0},{name:"ADD_MONTHS",params:[{name:"date"},{name:"n"}],desc:"返回在日期 date 基础上 n 个月后的日期值，如果 n 的值为负数则返回日期 date 基础上 n 个月前的日期值（date 减去 n 个月）。"},{name:"CURRENT_DATE",desc:"当前会话时区中的当前日期。"},{name:"CURRENT_TIMESTAMP",params:[{name:"precision"}],desc:"返回 TIMESTAMP WITH TIME ZONE 数据类型的当前会话时区中的当前日期，返回值中包含当前的时区信息。"},{name:"DBTIMEZONE",desc:"返回当前数据库实例的时区，在 OceanBase 中数据库时区恒为+00:00，且不支持修改。"},{name:"EXTRACT",body:"EXTRACT(${1:fields} FROM ${2:datetime})",desc:"从指定的时间字段或表达式中抽取年、月、日、时、分、秒等元素。"},{name:"FROM_TZ",params:[{name:"timestamp_value"},{name:"timestamp_value"}],desc:"将一个 TIMSTAMP 数据类型的值和时区信息拼成一个 TIMESTAMP WITH TIME ZONE 数据类型的时间值。"},{name:"LAST_DAY",params:[{name:"date"}],desc:"返回日期 date 所在月份的最后一天的日期。"},{name:"LOCALTIMESTAMP",params:[{name:"timestamp_precision"}],desc:"返回当前会话时区中的当前日期，返回 TIMESTAMP 数据类型的值。"},{name:"MONTHS_BETWEEN ",params:[{name:"date1"},{name:"date2"}],desc:"返回返回参数 date1 到 date2 之间的月数。"},{name:"NEW_TIME",params:[],desc:"",isNotSupport:!0},{name:"NEXT_DAY",params:[{name:"d1"},{name:"c1"}],desc:"返回日期 d1 的下一周中 c1（星期值）所在的日期值。"},{name:"NUMTODSINTERVAL",params:[{name:"n"},{name:"interval_unit"}],desc:"把参数 n 转为以参数 interval_unit 为单位的 INTERVAL DAY TO SECOND 数据类型的值。"},{name:"NUMTOYMINTERVAL",params:[{name:"n"},{name:"interval_unit"}],desc:"把参数 n 转为以 interval_unit 为单位的 INTERVAL YEAR TO MONTH 数据类型的值。"},{name:"ROUND",params:[{name:"date"},{name:"fmt"}],desc:"返回以参数 fmt 为单位距离的离指定日期 date 最近的日期时间值。"},{name:"SESSIONTIMEZONE",desc:"当前会话时区。"},{name:"SYS_EXTRACT_UTC",params:[{name:"datetime_with_timezone"}],desc:"返回与指定时间相对应的标准 UTC 时间。"},{name:"SYSDATE",desc:"当前日期。"},{name:"SYSTIMESTAMP",desc:"系统当前日期，返回值的秒的小数位包含 6 位精度，且包含当前时区信息。"},{name:"TO_CHAR",params:[{name:"datetime"},{name:"fmt"},{name:"nlsparam"}],desc:"将 DATE、TIMESTAMP、TIMESTAMP WITH TIME ZONE、TIMESTAMP WITH LOCAL TIME ZONE、INTERVAL DAY TO SECOND 和 INTERVAL YEAR TO MONTH 等数据类型的值按照参数 fmt 指定的格式转换为 VARCHAR2 数据类型的值。"},{name:"TO_DSINTERVAL",params:[{name:"n"}],desc:"将一个 CHAR、VARCHAR2、NCHAR 或 NVARCHAR2 数据类型的字符串转换为一个 INTERVAL DAY TO SECOND 数据类型的值。"},{name:"TO_TIMESTAMP",params:[{name:"char"},{name:"fmt"},{name:"nlsparam"}],desc:"将字符串转换为 TIMESTAMP 数据类型。"},{name:"TO_TIMESTAMP_TZ ",params:[{name:"char"},{name:"fmt"},{name:"nlsparam"}],desc:"将字符串转换为 TIMESTAMP WITH TIME ZONE 数据类型，包含时区信息。"},{name:"TO_YMINTERVAL",params:[{name:"n"}],desc:"将一个 CHAR、VARCHAR2、NCHAR 或 NVARCHAR2 数据类型的字符串转换为一个 INTERVAL YEAR TO MONTH 数据类型的值，该函数可以用来对一个日期时间值进行加减计算。"},{name:"TRUNC",params:[{name:"date"},{name:"fmt"}],desc:"返回以参数 fmt 为单位距离的离指定日期 date 最近的日期时间值，并且返回的日期值在 date 之前。"},{name:"TZ_OFFSET",params:[{name:"n"}],desc:"返回时区 n 的时区偏移量。时区偏移量是指与格林尼治标准时间 GMT 的差（小时和分钟）。"},{name:"GREATEST",params:[{name:"expr"}],desc:"返回一个或多个表达式列表中的最大值。"},{name:"LEAST",params:[{name:"expr"}],desc:"返回一个或多个表达式列表中的最小值。"},{name:"CAST",body:"CAST(${1:expr} AS ${2:type_name})",desc:"将源数据类型的表达式显式转换为另一种数据类型。"},{name:"ASCIISTR",params:[],desc:"",isNotSupport:!0},{name:"BIN_TO_NUM",params:[],desc:"",isNotSupport:!0},{name:"CHARTOROWID",params:[],desc:"",isNotSupport:!0},{name:"HEXTORAW",params:[{name:"char"}],desc:"将 CHAR、VARCHAR2、NCHAR 或 NVARCHAR2 数据类型中包含十六进制数字的字符转换为 RAW 数据类型。"},{name:"RAWTOHEX",params:[{name:"raw"}],desc:"将二进制数转换为一个相应的十六进制表示的字符串。"},{name:"TO_BINARY_DOUBLE ",params:[{name:"expr"},{name:"fmt"},{name:"nlsparam"}],desc:"返回一个双精度的 64 位浮点数。"},{name:"TO_BINARY_FLOAT",params:[{name:"expr"},{name:"fmt"},{name:"nlsparam"}],desc:"返回一个单精度的 32 位浮点数。"},{name:"TO_CHAR",params:[{name:"character"}],desc:"将 NCHAR、NVARCHAR2 或 CLOB 数据转换为数据库字符集。"},{name:"TO_DATE",params:[{name:"char"},{name:"fmt"},{name:"nlsparam"}],desc:"将 CHAR、VARCHAR、NCHAR 或 NVARCHAR2 数据类型的字符转换为日期数据类型的值。"},{name:"TO_DSINTERVAL",params:[{name:"n"}],desc:"将一个 CHAR、VARCHAR2、NCHAR 或 NVARCHAR2 数据类型的字符串转换为一个 INTERVAL DAY TO SECOND 数据类型的值，该函数可以用来对一个日期时间值进行加减计算。"},{name:"TO_NUMBER",params:[{name:"char"},{name:"fmt"},{name:"nlsparam"}],desc:"将 expr 转换为数值数据类型的值。expr 可以是 CHAR、VARCHAR2、NCHAR、NVARCHAR2、BINARY_FLOAT 或 BINARY_DOUBLE 数据类型的数值。"},{name:"TO_TIMESTAMP",params:[{name:"char"},{name:"fmt"},{name:"nlsparam"}],desc:"将字符串转换为 TIMESTAMP 数据类型。"},{name:"TO_TIMESTAMP_TZ",params:[{name:"char"},{name:"fmt"},{name:"nlsparam"}],desc:"将字符串转换为 TIMESTAMP WITH TIME ZONE 数据类型，包含时区信息。"},{name:"TO_YMINTERVAL",params:[{name:"n"}],desc:"将一个 CHAR、VARCHAR2、NCHAR 或 NVARCHAR2 数据类型的字符串转换为一个 INTERVAL YEAR TO MONTH 数据类型的值，该函数可以用来对一个日期时间值进行加减计算。"},{name:"DECODE",params:[{name:"condition"},{name:"search"},{name:"result"}],desc:"依次用参数 search 与 condition 做比较，直至 condition 与 search 的值相等，则返回对应 search 后跟随的参数 result 的值。如果没有 search 与 condition 相等，则返回参数 default 的值。"},{name:"ORA_HASH",params:[{name:"expr"},{name:"max_bucket"},{name:"seed_value"}],desc:"获取对应表达式的 HASH 值。"},{name:"VSIZE",params:[{name:"x"}],desc:"返回 x 的字节大小数。"},{name:"COALESCE",params:[{name:"expr1"},{name:"expr1"}],desc:"返回参数列表中第一个非空表达式，必须指定最少两个参数。"},{name:"LNNVL",params:[{name:"condition"}],desc:"判断条件中的一个或者两个操作数是否为 NULL"},{name:"NULLIF",params:[],desc:"",isNotSupport:!0},{name:"NVL",params:[{name:"expr1"},{name:"expr2"}],desc:"返回一个非 NULL 值"},{name:"NVL2 ",params:[{name:"expr1"},{name:"expr2"},{name:"expr3"}],desc:"根据表达式是否为空，返回不同的值。"}].concat([{name:"AVG",params:[{name:"expr"}],desc:"返回数值列的平均值。"},{name:"COUNT",params:[{name:"expr"}],desc:"查询 expr 的行数。"},{name:"SUM",params:[{name:"expr"}],desc:"返回参数中指定列的和。"},{name:"GROUPING",params:[],desc:"",isNotSupport:!0},{name:"MAX",params:[{name:"expr"}],desc:"返回参数中指定的列中的最大值。"},{name:"MIN",params:[{name:"expr"}],desc:"返回参数中指定列的最小值。"},{name:"LISTAGG",body:"LISTAGG (${1:measure_expr}) WITHIN GROUP (ORDER BY ${2: expr}) OVER ${3:query_partition_clause}",desc:"用于列转行，LISTAGG 对 ORDER BY 子句中指定的每个组内的数据进行排序，然后合并度量列的值。"},{name:"ROLLUP",params:[{name:"col1"}],desc:"在数据统计和报表生成过程中，它可以为每个分组返回一个小计，同时为所有分组返回总计。"},{name:"STDDEV",params:[{name:"expr"}],desc:"计算总体标准差。"},{name:"STDDEV_POP",params:[{name:"expr"}],desc:"计算总体标准差。"},{name:"STDDEV_SAMP",params:[{name:"expr"}],desc:"计算样本标准差。"},{name:"VARIANCE",params:[{name:"expr"}],desc:"返回参数指定列的方差。"},{name:"APPROX_COUNT_DISTINCT ",params:[{name:"expr"}],desc:"对某一列去重后的行数进行计算，结果只能返回一个值，且该值是近似值，该函数可以进一步用于计算被引用的列的选择性。"}]).concat([]);var t=n(54375),S=n(54768);let I=new S.q(window.obMonaco.getWorkerUrl("oboracle")),N=t.Ud(I.getWorker());var O=function(e,E,n,T){return new(n||(n=Promise))(function(A,R){function a(e){try{S(T.next(e))}catch(e){R(e)}}function t(e){try{S(T.throw(e))}catch(e){R(e)}}function S(e){var E;e.done?A(e.value):((E=e.value)instanceof n?E:new n(function(e){e(E)})).then(a,t)}S((T=T.apply(e,E||[])).next())})},r=class{constructor(e){this.triggerCharacters=["."],this.plugin=null,this.plugin=e}getModelOptions(e){var E;return null===(E=this.plugin)||void 0===E?void 0:E.modelOptionsMap.get(e)}provideCompletionItems(e,E,n,T){var A,R;let a=n.triggerCharacter,t=(null===(R=null===(A=this.plugin)||void 0===A?void 0:A.modelOptionsMap.get(e.id))||void 0===R?void 0:R.delimiter)||";",S=e.getWordUntilPosition(E),I={startLineNumber:E.lineNumber,endLineNumber:E.lineNumber,startColumn:S.startColumn,endColumn:S.endColumn},N=e.getOffsetAt(E);return this.getCompleteWordFromOffset(N,e.getValue(),t,I,e,a)}getColumnList(e,E,n){var T,A;return O(this,void 0,void 0,function*(){let a=this.getModelOptions(e.id),t=[],S=yield null===(T=null==a?void 0:a.getTableColumns)||void 0===T?void 0:T.call(a,E.tableName,E.schemaName);return(null==S?void 0:S.length)||E.schemaName||(S=yield null===(A=null==a?void 0:a.getTableColumns)||void 0===A?void 0:A.call(a,E.tableName,"sys")),S&&S.forEach(e=>{t.push((0,R.yD)(e.columnName,E.tableName,E.schemaName,n))}),t})}getSchemaList(e,E){var n;return O(this,void 0,void 0,function*(){let T=this.getModelOptions(e.id),A=[],a=yield null===(n=null==T?void 0:T.getSchemaList)||void 0===n?void 0:n.call(T);return a&&a.forEach(e=>{A.push((0,R.lW)(e,E))}),A})}getTableList(e,E,n){var T;return O(this,void 0,void 0,function*(){let A=this.getModelOptions(e.id),a=[],t=yield null===(T=null==A?void 0:A.getTableList)||void 0===T?void 0:T.call(A,E);return t&&t.forEach(e=>{a.push((0,R.Pf)(e,E,!1,n))}),a})}getFunctions(e,E){var n;return O(this,void 0,void 0,function*(){let T=this.getModelOptions(e.id),A=yield null===(n=null==T?void 0:T.getFunctions)||void 0===n?void 0:n.call(T);return(A||[]).concat(a).map(e=>(0,R.Ht)(e,E))})}getSnippets(e,E){var n;return O(this,void 0,void 0,function*(){let T=this.getModelOptions(e.id),A=yield null===(n=null==T?void 0:T.getSnippets)||void 0===n?void 0:n.call(T);return(A||[]).map(e=>(0,R.k8)(e,E))})}getCompleteWordFromOffset(e,E,n,T,A,a){var t;return O(this,void 0,void 0,function*(){let a=N.parser,S=yield a.getAutoCompletion(E,n,e);if(S){let e=this.getModelOptions(A.id),E=[];for(let n of S)if("string"==typeof n)E.push((0,R.Lx)(n,T));else if("allTables"===n.type)E=E.concat((yield this.getTableList(A,n.schema,T))),n.schema||(E=E.concat((yield this.getTableList(A,"sys",T))));else if("tableColumns"===n.type)E=E.concat((yield this.getColumnList(A,n,T)));else if("withTable"===n.type)E.push((0,R.Pf)(n.tableName,"CTE",!1,T));else if("allSchemas"===n.type)E=E.concat((yield this.getSchemaList(A,T)));else if("objectAccess"===n.type){let R=n.objectName,a=yield null===(t=null==e?void 0:e.getSchemaList)||void 0===t?void 0:t.call(e),S=null==a?void 0:a.find(e=>e===R);if(S){E=E.concat((yield this.getTableList(A,n.objectName,T)));continue}let I=R.split("."),N=I.length>1?I[1]:I[0],O=I.length>1?I[0]:void 0,r=yield this.getColumnList(A,{tableName:N,schemaName:O},T);(null==r?void 0:r.length)&&(E=E.concat(r))}else"fromTable"===n.type?E.push((0,R.Pf)(n.tableName,n.schemaName,!0,T)):"allFunction"===n.type&&(E=E.concat((yield this.getFunctions(A,T))));return{suggestions:E=E.concat((yield this.getSnippets(A,T))),incomplete:!1}}return{suggestions:[],incomplete:!1}})}};let s=["ADMIN","AFTER","ALLOCATE","ANALYZE","ARCHIVE","ARCHIVELOG","AUTHORIZATION","AVG","BACKUP","BECOME","BEFORE","BEGIN_KEY","BLOCK","BODY","CACHE","CANCEL","CASCADE","CHANGE","CHARACTER","CHECKPOINT","CLOSE","COBOL","COMMIT","COMPILE","CONSTRAINT","CONSTRAINTS","CONTENTS","CONTINUE","CONTROLFILE","COUNT","CURSOR","CYCLE","DATABASE","DATAFILE","DBA","DEC","DECLARE","DISABLE","DISMOUNT","DOUBLE","DUMP","EACH","ENABLE","END","ESCAPE","EVENTS","EXCEPT","EXCEPTIONS","EXEC","EXECUTE","EXPLAIN","EXTENT","EXTERNALLY","FETCH","FLUSH","FORCE","FOREIGN","FORTRAN","FOUND","FREELIST","FREELISTS","FUNCTION","GO","GOTO","GROUPS","INCLUDING","INDICATOR","INITRANS","INSTANCE","INT","KEY","LANGUAGE","LAYER","LINK","LISTS","LOGFILE","MANAGE","MANUAL","MAX","MAXDATAFILES","MAXINSTANCES","MAXLOGFILES","MAXLOGHISTORY","MAXLOGMEMBERS","MAXTRANS","MAXVALUE","MIN","MINEXTENTS","MINVALUE","MODULE","MOUNT","NEW","NEXT","NOARCHIVELOG","NOCACHE","NOCYCLE","NOMAXVALUE","NOMINVALUE","NONE","NOORDER","NORESETLOGS","NOSORT","NUMERIC","OFF","OLD","ONLY","OPEN","OPTIMAL","OWN","PACKAGE_KEY","PARALLEL","PCTINCREASE","PCTUSED","PLAN","PLI","PRECISION","PRIMARY","PRIVATE","PROCEDURE","PROFILE","QUOTA","READ","REAL","RECOVER","REFERENCES","REFERENCING","RESETLOGS","RESTRICTED","REUSE","ROLE","ROLES","ROLLBACK","SAVEPOINT","SCHEMA","SCN","SECTION","SEGMENT","SEQUENCE","SHARED","SNAPSHOT","SOME","SORT","SQL","SQLCODE","SQLERROR","SQLSTATE","STATEMENT_ID","STATISTICS","STOP","STORAGE","SUM","SWITCH","SYSTEM","TABLES","TABLESPACE","TEMPORARY","THREAD","TIME","TRACING","TRANSACTION","TRIGGERS","TRUNCATE","UNDER","UNLIMITED","UNTIL","USE","USING","WHEN","WORK","WRITE","ACCOUNT","ACCESSIBLE","ACTION","ACTIVE","ADDDATE","ADMINISTER","AGGREGATE","AGAINST","ALGORITHM","ALWAYS","ANALYSE","APPROX_COUNT_DISTINCT","APPROX_COUNT_DISTINCT_SYNOPSIS","APPROX_COUNT_DISTINCT_SYNOPSIS_MERGE","ASENSITIVE","AT","AUTHORS","AUTO","AUTOEXTEND_SIZE","AVG_ROW_LENGTH","BASE","BASELINE","BASELINE_ID","BASIC","BALANCE","BINARY","BINARY_DOUBLE","BINARY_FLOAT","BINDING","BINLOG","BIT","BLOB","BLOCK_SIZE","BLOCK_INDEX","BLOOM_FILTER","BOOL","BOOLEAN","BOOTSTRAP","BOTH","BTREE","BULK","BULK_EXCEPTIONS","BULK_ROWCOUNT","BYTE","BREADTH","CALL","CASCADED","CAST","CATALOG_NAME","CHAIN","CHANGED","CHARSET","CHECKSUM","CIPHER","CLASS_ORIGIN","CLEAN","CLEAR","CLIENT","CLOB","CLOG","CLUSTER_ID","CLUSTER_NAME","COALESCE","CODE","COLLATE","COLLATION","COLLECT","COLUMN_FORMAT","COLUMN_NAME","COLUMN_OUTER_JOIN_SYMBOL","COLUMN_STAT","COLUMNS","COMMITTED","COMPACT","COMPLETION","COMPRESSED","COMPRESSION","COMPUTE","CONCURRENT","CONNECTION","CONNECT_BY_ISCYCLE","CONNECT_BY_ISLEAF","CONSISTENT","CONSISTENT_MODE","CONSTRAINT_CATALOG","CONSTRAINT_NAME","CONSTRAINT_SCHEMA","CONTAINS","CONTEXT","CONTRIBUTORS","CONVERT","COPY","CORR","COVAR_POP","COVAR_SAMP","CPU","CREATE_TIMESTAMP","CROSS","CUBE","CUME_DIST","CURRENT_USER","CURRENT_SCHEMA","CURRENT_DATE","CURRENT_TIMESTAMP","DATA","DATABASES","DATABASE_ID","DATA_TABLE_ID","DATE_ADD","DATE_SUB","DATETIME","DAY","DAY_HOUR","DAY_MICROSECOND","DAY_MINUTE","DAY_SECOND","DBA_RECYCLEBIN","DBTIMEZONE","DEALLOCATE","DEFAULT_AUTH","DEFINER","DELAY","DELAYED","DELAY_KEY_WRITE","DENSE_RANK","DEPTH","DES_KEY_FILE","DESCRIBE","DESTINATION","DETERMINISTIC","DIAGNOSTICS","DICTIONARY","DIRECTORY","DISCARD","DISK","DISTINCTROW","DIV","DO","DUMPFILE","DUPLICATE","DUPLICATE_SCOPE","DYNAMIC","DEFAULT_TABLEGROUP","E","EFFECTIVE","ELSEIF","ENCLOSED","ENCRYPTION","ENDS","ENGINE_","ENGINES","ENUM","ERROR_CODE","ERROR_P","ERROR_INDEX","ERRORS","ESCAPED","ESTIMATE","EVENT","EVERY","EXCHANGE","EXCLUDE","EXEMPT","EXIT","EXPANSION","EXPIRE","EXPIRE_INFO","EXPORT","EXTENDED","EXTENDED_NOADDR","EXTENT_SIZE","EXTRACT","FAILED_LOGIN_ATTEMPTS","FAST","FAULTS","FIELDS","FILE_ID","FILEX","FINAL_COUNT","FIRST","FIRST_VALUE","FIXED","FLASHBACK","FLOAT4","FLOAT8","FOLLOWER","FOLLOWING","FORMAT","FREEZE","FREQUENCY","FROZEN","FULL","G","GENERAL","GENERATED","GEOMETRY","GEOMETRYCOLLECTION","GET","GET_FORMAT","GLOBAL","GLOBAL_ALIAS","GRANTS","GROUPING","GTS","HANDLER","HASH","HELP","HIGH","HIGH_PRIORITY","HOUR_MICROSECOND","HOUR_MINUTE","HOUR_SECOND","HOST","HOSTS","HOUR","ID","IDC","IF","IFIGNORE","IGNORE","IGNORE_SERVER_IDS","ILOG","ILOGCACHE","IMPORT","INDEXES","INDEX_TABLE_ID","INCR","INCLUDE","INFO","INFILE","INITIAL_SIZE","INNER","INNER_PARSE","INOUT","INSENSITIVE","INSERT_METHOD","INSTALL","INT1","INT2","INT3","INT4","INT8","INTERVAL","INVOKER","IO","IO_AFTER_GTIDS","IO_BEFORE_GTIDS","IO_THREAD","IPC","ISNULL","ISOLATION","ISSUER","IS_TENANT_SYS_POOL","ITERATE","JOB","JOIN","JSON","K","KEY_BLOCK_SIZE","KEYS","KEYSTORE","KEY_VERSION","KILL","KEEP","KVCACHE","LAG","LAST","LAST_VALUE","LEAD","LEADER","LEADING","LEAVE","LEAVES","LEFT","LESS","LIMIT","LINEAR","LINES","LINESTRING","LIST","LISTAGG","LNNVL","LOAD","LOCAL","LOCALITY","LOCALTIMESTAMP","LOCK_","LOCKED","LOCKS","LOGONLY_REPLICA_NUM","LOGS","LONGBLOB","LONGTEXT","LOOP","LOW","LOW_PRIORITY","ISOPEN","ISOLATION_LEVEL","M","MAJOR","MANAGEMENT","MASTER","MASTER_AUTO_POSITION","MASTER_BIND","MASTER_CONNECT_RETRY","MASTER_DELAY","MASTER_HEARTBEAT_PERIOD","MASTER_HOST","MASTER_LOG_FILE","MASTER_LOG_POS","MASTER_PASSWORD","MASTER_PORT","MASTER_RETRY_COUNT","MASTER_SERVER_ID","MASTER_SSL","MASTER_SSL_CA","MASTER_SSL_CAPATH","MASTER_SSL_CERT","MASTER_SSL_CIPHER","MASTER_SSL_CRL","MASTER_SSL_CRLPATH","MASTER_SSL_KEY","MASTER_SSL_VERIFY_SERVER_CERT","MASTER_USER","MATCH","MATCHED","MAX_CONNECTIONS_PER_HOUR","MAX_CPU","MAX_DISK_SIZE","MAX_IOPS","MAX_MEMORY","MAX_QUERIES_PER_HOUR","MAX_ROWS","MAX_SESSION_NUM","MAX_SIZE","MAX_UPDATES_PER_HOUR","MAX_USED_PART_ID","MAX_USER_CONNECTIONS","MEDIUM","MEDIUMBLOB","MEDIUMINT","MEDIUMTEXT","MEMORY","MEMTABLE","MERGE","MESSAGE_TEXT","META","MICROSECOND","MIDDLEINT","MIGRATE","MIGRATION","MIN_CPU","MIN_IOPS","MIN_MEMORY","MINOR","MIN_ROWS","MINUTE","MINUTE_MICROSECOND","MINUTE_SECOND","MOD","MODIFIES","MONTH","MOVE","MOVEMENT","MULTILINESTRING","MULTIPOINT","MULTIPOLYGON","MUTEX","MYSQL_ERRNO","NAME","NAMES","NATIONAL","NATURAL","NCHAR","NDB","NDBCLUSTER","NO","NODEGROUP","NOLOGGING","NOW","NO_WAIT","NO_WRITE_TO_BINLOG","NULLS","NTILE","NTH_VALUE","NVARCHAR","NVARCHAR2","OBJECT","OCCUR","OFFSET","OLD_PASSWORD","OLD_KEY","OLTP","OVER","ONE","ONE_SHOT","OPTIONS","OPTIMIZE","OPTIONALLY","ORA_ROWSCN","ORIG_DEFAULT","OUT","OUTER","OUTFILE","OUTLINE","OWNER","P","PACK_KEYS","PAGE","PARAMETERS","PARAM_ASSIGN_OPERATOR","PARSER","PARTIAL","PARTITION","PARTITION_ID","PARTITIONING","PARTITIONS","PERCENT_RANK","PASSWORD","PASSWORD_LOCK_TIME","PASSWORD_VERIFY_FUNCTION","PAUSE","PERCENTAGE","PHASE","PLANREGRESS","PLUGIN","PLUGIN_DIR","PLUGINS","PIVOT","POINT","POLICY","POLYGON","POOL","PORT","POSITION","PRECEDING","PREPARE","PRESERVE","PREV","PRIMARY_ZONE","PRIVILEGE","PROCESS","PROCESSLIST","PROFILES","PROGRESSIVE_MERGE_NUM","PROXY","PURGE","QUARTER","QUERY","QUICK","RANK","RANGE","RATIO_TO_REPORT","READ_WRITE","READS","READ_ONLY","REBUILD","RECURSIVE","RECYCLE","RECYCLEBIN","REDACTION","ROW_NUMBER","REDO_BUFFER_SIZE","REDOFILE","REDUNDANT","REFRESH","REGEXP_LIKE","REGION","REGR_SLOPE","REGR_INTERCEPT","REGR_COUNT","REGR_R2","REGR_AVGX","REGR_AVGY","REGR_SXX","REGR_SYY","REGR_SXY","RELAY","RELAYLOG","RELAY_LOG_FILE","RELAY_LOG_POS","RELAY_THREAD","RELEASE","RELOAD","REMOVE","REORGANIZE","REPAIR","REPEAT","REPEATABLE","REPLACE","REPLICA","REPLICA_NUM","REPLICA_TYPE","REPLICATION","REPORT","REQUIRE","RESET","RESIGNAL","RESOURCE_POOL_LIST","RESPECT","RESTART","RESTORE","RESTRICT","RESUME","RETURN","RETURNED_SQLSTATE","RETURNING","RETURNS","REVERSE","REWRITE_MERGE_VERSION","REMOTE_OSS","RLIKE","RIGHT","ROLLUP","ROOT","ROOTTABLE","ROOTSERVICE","ROOTSERVICE_LIST","ROUTINE","ROWCOUNT","ROW_COUNT","ROW_FORMAT","RTREE","RUN","SAMPLE","SCHEDULE","SCHEMAS","SCHEMA_NAME","SCOPE","SEARCH","SECOND","SECOND_MICROSECOND","SECURITY","SEED","SENSITIVE","SEPARATOR","SERIAL","SERIALIZABLE","SERVER","SERVER_IP","SERVER_PORT","SERVER_TYPE","SESSION_ALIAS","SESSION_USER","SESSIONTIMEZONE","SET_MASTER_CLUSTER","SET_SLAVE_CLUSTER","SET_TP","SHRINK","SHOW","SHUTDOWN","SIBLINGS","SIGNAL","SIGNED","SIMPLE","SLAVE","SLOW","SOCKET","SONAME","SOUNDS","SOURCE","SPACE","SPATIAL","SPECIFIC","SPFILE","SPLIT","SQLEXCEPTION","SQLWARNING","SQL_BIG_RESULT","SQL_CALC_FOUND_ROW","SQL_SMALL_RESULT","SQL_AFTER_GTIDS","SQL_AFTER_MTS_GAPS","SQL_BEFORE_GTIDS","SQL_BUFFER_RESULT","SQL_CACHE","SQL_ID","SQL_NO_CACHE","SQL_THREAD","SQL_TSI_DAY","SQL_TSI_HOUR","SQL_TSI_MINUTE","SQL_TSI_MONTH","SQL_TSI_QUARTER","SQL_TSI_SECOND","SQL_TSI_WEEK","SQL_TSI_YEAR","SSL","STRAIGHT_JOIN","STARTING","STARTS","STATS_AUTO_RECALC","STATS_PERSISTENT","STATS_SAMPLE_PAGES","STATUS","STATEMENTS","STDDEV","STDDEV_POP","STDDEV_SAMP","STORAGE_FORMAT_VERSION","STORAGE_FORMAT_WORK_VERSION","STORED","STORING","STRONG","SUBCLASS_ORIGIN","SUBDATE","SUBJECT","SUBPARTITION","SUBPARTITIONS","SUBSTR","SUPER","SUSPEND","SWAPS","SWITCHES","SYSTEM_USER","SYSTIMESTAMP","SYSBACKUP","SYSDBA","SYSKM","SYSOPER","SYS_CONNECT_BY_PATH","T","TABLEGROUP","TABLE_CHECKSUM","TABLE_MODE","TABLEGROUPS","TABLEGROUP_ID","TABLE_ID","TABLE_NAME","TABLET","TABLET_SIZE","TABLET_MAX_SIZE","TASK","TEMPLATE","TEMPTABLE","TENANT","TERMINATED","TEXT","THAN","TIMESTAMP","TIMESTAMPADD","TIMESTAMPDIFF","TIMEZONE_ABBR","TIMEZONE_HOUR","TIMEZONE_MINUTE","TIMEZONE_REGION","TIME_ZONE_INFO","TINYBLOB","TINYTEXT","TP_NAME","TP_NO","TRACE","TRADITIONAL","TRAILING","TRIM","TYPE","TYPES","UNCOMMITTED","UNDEFINED","UNDO","UNDO_BUFFER_SIZE","UNDOFILE","UNICODE","UNKNOWN","UNINSTALL","UNIT","UNIT_NUM","UNLOCK","UNLOCKED","UNUSUAL","UNPIVOT","UPGRADE","UROWID","USAGE","USE_BLOOM_FILTER","USE_FRM","USER_RESOURCES","UTC_DATE","UTC_TIMESTAMP","UNBOUNDED","VALID","VARIABLES","VAR_POP","VAR_SAMP","VERBOSE","MATERIALIZED","WAIT","WARNINGS","WEEK","WEIGHT_STRING","WRAPPER","X509","XA","XML","YEAR","ZONE","ZONE_LIST","ZONE_TYPE","LOCATION","VARIANCE","VARYING","VIRTUAL","VISIBLE","INVISIBLE","RELY","NORELY","NOVALIDATE","WITHIN","WEAK","WHILE","XOR","YEAR_MONTH","ZEROFILL","PERCENT","TIES","THROTTLE","PRIORITY","RT","NETWORK","LOGICAL_READS","QUEUE_TIME","MEMBER","SUBMULTISET","EMPTY","A"].concat(["ACCESS","ADD","ALL","ALTER","AND","ANY","ARRAYLEN","AS","ASC","AUDIT","BEGIN","BEGIN","BETWEEN","BY","CASE","CHAR","CHECK","CLUSTER","COLUMN","COMMENT","COMPRESS","CONNECT","CONNECT_BY_ROOT","CREATE","CURRENT","DATE","DECIMAL","DEFAULT","DELETE","DESC","DISTINCT","DROP","ELSE","ENGINE","ERROR","EXCLUSIVE","EXISTS","FILE","FILE","FLOAT","FOR","FROM","GRANT","GROUP","HAVING","IDENTIFIED","IMMEDIATE","IN","INCREMENT","INDEX","INITIAL","INSERT","INTEGER","INTERSECT","INTO","IS","LEVEL","LIKE","LOCK","LONG","MAXEXTENTS","MINUS","MODE","MODIFY","NOAUDIT","NOCOMPRESS","NOT","NOTFOUND","NO_REWRITE","NUMBER","OF","OFFLINE","ON","ONLINE","OPTION","OR","ORDER","PACKAGE","PCTFREE","PRIOR","PRIVILEGES","PUBLIC","RAW","READ_CONSISTENCY","RENAME","RESOURCE","REVOKE","ROW","ROWID","ROWLABEL","ROWNUM","ROWS","SELECT","SESSION","SET","SHARE","SIZE","SMALLINT","SQLBUF","SQL_CALC_FOUND_ROWS","START","SUCCESSFUL","SYNONYM","DUAL","SYSDATE","TABLE","THEN","TO","TRIGGER","UID","UNION","UNIQUE","UPDATE","USER","VALIDATE","VALUES","VARCHAR2","VARCHAR","VARCHARACTER","VIEW","WHENEVER","WHERE","WITH","NOWAIT","NULLX"]),i={comments:{lineComment:"--",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],wordPattern:/[\w#$]+/i,autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"},{open:"`",close:"`"}]},L={defaultToken:"",tokenPostfix:".sql",ignoreCase:!0,brackets:[{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"}],keywords:Array.from(new Set(s.concat(["ABORT","ACCEPT","ACCESS","ACCESSIBLE","ADD","ALL","ALTER","AND","ANY","ARRAY","ARRAYLEN","AS","ASC","ASSERT","ASSIGN","ASSIGN_OPERATOR","AT","AUTHID","AUTHORIZATION","AVG","BASE_TABLE","BEGIN_KEY","BETWEEN","BINARY","BINARY_DOUBLE","BINARY_FLOAT","BINARY_INTEGER","BLOB","BODY","BOOL","BOOLEAN","BULK","BY","BYTE","C","CALL","CASE","CHARACTER","CHARSET","CHAR_BASE","CHECK","CLOB","CLOSE","CLUSTER","CLUSTERS","COLAUTH","COLLATE","COLLECT","COLUMNS","COMMIT","COMPILE","COMPRESS","CONNECT","CONSTANT","CONSTRUCTOR","CONTINUE","COUNT","CRASH","CREATE","CURRENT","CURRENT_USER","CURRVAL","CURSOR","CUSTOMDATUM","DATABASE","DATA_BASE","DATE","DATE_VALUE","DBA","DEBUG","DEBUGOFF","DEBUGON","DECIMAL","DECIMAL_VAL","DECLARE","DEFAULT","DEFINER","DEFINITION","DELAY","DELETE","DELTA","DESC","DETERMINISTIC","DIGITS","DISPOSE","DISTINCT","DO","DROP","Dot","EDITIONABLE","ELSE","ELSIF","END_KEY","END_P","ENTRY","EXCEPTION","EXCEPTIONS","EXCEPTION_INIT","EXECUTE","EXISTS","EXIT","EXTERNAL","FALSE","FETCH","FINAL","FLOAT","FOR","FORALL","FORCE","FORM","FROM","FUNCTION","GENERIC","GOTO","GRANT","GROUP","HASH","HAVING","IDENT","IDENTIFIED","IF","IMMEDIATE","IN","INDEX","INDEXES","INDICATOR","INLINE","INSERT","INSTANTIABLE","INTEGER","INTERFACE","INTERSECT","INTERVAL","INTNUM","INTO","IS","JAVA","LABEL_LEFT","LABEL_RIGHT","LANGUAGE","LEVEL","LIKE","LIMIT","LIMITED","LOCAL","LONG","LOOP","LeftBracket","LeftParen","MAP","MAX","MEMBER","MIN","MINUS","MLSLABEL","MOD","MODE","NAME","NATURAL","NATURALN","NCHAR","NEW","NEXTVAL","NO","NOCOMPRESS","NOCOPY","NONEDITIONABLE","NOT","NULLX","NUMBER","NUMBER_BASE","NUMERIC","NVARCHAR","NVARCHAR2","OBJECT","OF","OID","OLD","ON","OPEN","OPTION","OR","ORADATA","ORDER","OTHERS","OUT","OVERRIDING","PACKAGE_P","PARALLEL_ENABLE","PARAM_ASSIGN_OPERATOR","PARENT","PARTITION","PCTFREE","PIPELINED","PLS_INTEGER","POSITIVE","POSITIVEN","PRAGMA","PRIOR","PRIVATE","PROCEDURE","PUBLIC","RAISE","RANGE","RANGE_OPERATOR","RAW","REAL","RECORD","REF","REFERENCING","RELEASE","RELIES_ON","REMR","RENAME","REPLACE","RESOURCE","RESTIRCT_REFERENCES","RESULT","RESULT_CACHE","RETURN","REUSE","REVERSE","REVOKE","RNDS","RNPS","ROLLBACK","ROWID","ROWLABEL","ROWNUM","ROWTYPE","RUN","RightBracket","RightParen","SAVE","SAVEPOINT","SCHEMA","SELF","SEPARATE","SET","SETTINGS","SIGNTYPE","SIMPLE_DOUBLE","SIMPLE_FLOAT","SIMPLE_INTEGER","SIZE","SMALLINT","SPACE","SPECIFICATION","SQL","SQLCODE","SQLDATA","SQLERRM","SQL_KEYWORD","START","STATEMENT","STATIC","STDDEV","STRING","SUBTYPE","SUM","TABAUTH","TABLE","TABLES","TASK","TERMINATE","THEN","TIME","TIMESTAMP","TO","TRIGGER","TRUE","TRUST","TYPE","UNDER","UNION","UNIQUE","UPDATE","USE","USING","USING_NLS_COMP","VALIDATE","VALUE","VALUES","VARCHAR2","VARIABLE","VARIANCE","VARRAY","VARYING","VIEW","VIEWS","WHEN","WHERE","WHILE","WITH","WNDS","WNPS","WORK","XOR","YEAR","YES","ZONE"]))),operators:[":="],packages:["DBMS_CRYPTO","DBMS_DEBUG","UTL_ENCODE","DBMS_LOB","DBMS_LOCK.SLEEP","DBMS_METADATA.GET_DDL","DBMS_OUTPUT","DBMS_RANDOM","DBMS_SQL","DBMS_XA","ODCIArgDesc.ArgType","ODCIEnv","ODCIFuncInfo.Flags","ODCIIndexAlter parameter alter_option","ODCIIndexInfo","ODCIPredInfo.Flags","ODCIQueryInfo.Flags","ODCIStatsOptions","UTL_I18N","UTL_RAW","SA_SYSDBA","SA_COMPONENTS","SA_LABEL_ADMIN","SA_POLICY_ADMIN","SA_USER_ADMIN.SET_LEVELS","SA_SESSION"],builtinFunctions:a.map(e=>e.name),pseudoColumns:["$ACTION","$IDENTITY","$ROWGUID","$PARTITION"],escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,tokenizer:{root:[{include:"@comments"},{include:"@whitespace"},{include:"@pseudoColumns"},{include:"@numbers"},{include:"@strings"},{include:"@backTick"},{include:"@complexIdentifiers"},{include:"@scopes"},{include:"@qstrings"},[/[;,.]/,"delimiter"],[/[()]/,"@brackets"],[/[\w@#$]+/,{cases:{"@keywords":"keyword","@operators":"operator","@packages":"type.identifier","@builtinFunctions":"type.identifier","@default":"identifier"}}],[/[<>=!%&+\-*/|~^]/,"operator"]],qstrings:[[/q\'/,{token:"string",next:"@qstring"}]],qstring:[[/\'.*?\'\'/s,{token:"string",next:"@pop"}],[/<.*?>\'/s,{token:"string",next:"@pop"}],[/\[.*?\]\'/s,{token:"string",next:"@pop"}],[/\{.*?\}\'/s,{token:"string",next:"@pop"}],[/\(.*?\)\'/s,{token:"string",next:"@pop"}],[/!.*?!\'/s,{token:"string",next:"@pop"}],[/#.*?#\'/s,{token:"string",next:"@pop"}],[/".*?"\'/s,{token:"string",next:"@pop"}]],whitespace:[[/\s+/,"white"]],comments:[[/--+.*/,"comment"],[/\/\*/,{token:"comment.quote",next:"@comment"}]],comment:[[/[^*/]+/,"comment"],[/\*\//,{token:"comment.quote",next:"@pop"}],[/./,"comment"]],pseudoColumns:[[/[$][A-Za-z_][\w@#$]*/,{cases:{"@pseudoColumns":"predefined","@default":"identifier"}}]],numbers:[[/0[xX][0-9a-fA-F]*/,"number"],[/[$][+-]*\d*(\.\d*)?/,"number"],[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/,"number"]],strings:[[/N'/,{token:"string",next:"@string"}],[/'/,{token:"string",next:"@string"}]],string:[[/[^']+/,"string"],[/@escapes/,"string.escape"],[/''/,"string"],[/'/,{token:"string",next:"@pop"}]],backTick:[[/`/,{token:"identifier.quote",next:"@backTickIdentifiers"}]],backTickIdentifiers:[[/[^`]+/,"string.escape"],[/`/,{token:"identifier.quote",next:"@pop"}]],complexIdentifiers:[[/\[/,{token:"identifier.quote",next:"@bracketedIdentifier"}],[/"/,{token:"identifier.quote",next:"@quotedIdentifier"}]],bracketedIdentifier:[[/[^\]]+/,"identifier"],[/]]/,"identifier"],[/]/,{token:"identifier.quote",next:"@pop"}]],quotedIdentifier:[[/[^"]+/,"identifier"],[/""/,"identifier"],[/"/,{token:"identifier.quote",next:"@pop"}]],scopes:[[/BEGIN\s+(DISTRIBUTED\s+)?TRAN(SACTION)?\b/i,"keyword"],[/BEGIN\s+TRY\b/i,{token:"keyword.try"}],[/END\s+TRY\b/i,{token:"keyword.try"}],[/BEGIN\s+CATCH\b/i,{token:"keyword.catch"}],[/END\s+CATCH\b/i,{token:"keyword.catch"}],[/(BEGIN|CASE)\b/i,{token:"keyword.block"}],[/END\b/i,{token:"keyword.block"}],[/WHEN\b/i,{token:"keyword.choice"}],[/THEN\b/i,{token:"keyword.choice"}]]}};var o=n(5601);function C(e){T.Mj.register({id:A.$.OB_Oracle}),T.Mj.setMonarchTokensProvider(A.$.OB_Oracle,L),T.Mj.setLanguageConfiguration(A.$.OB_Oracle,i),T.Mj.registerCompletionItemProvider(A.$.OB_Oracle,new r(e)),T.Mj.registerDocumentFormattingEditProvider(A.$.OB_Oracle,new o.m(e,A.$.OB_Oracle)),T.Mj.registerDocumentRangeFormattingEditProvider(A.$.OB_Oracle,new o.X(e,A.$.OB_Oracle))}},81065:function(e,E,n){var T,A;n.d(E,{$:function(){return T}}),(A=T||(T={})).OB_MySQL="obmysql",A.OB_Oracle="oboracle",A.MySQL="mysql"},54375:function(e,E,n){n.d(E,{Ud:function(){return O}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let T=Symbol("Comlink.proxy"),A=Symbol("Comlink.endpoint"),R=Symbol("Comlink.releaseProxy"),a=Symbol("Comlink.finalizer"),t=Symbol("Comlink.thrown"),S=e=>"object"==typeof e&&null!==e||"function"==typeof e,I=new Map([["proxy",{canHandle:e=>S(e)&&e[T],serialize(e){let{port1:E,port2:n}=new MessageChannel;return function e(E,n=globalThis,A=["*"]){n.addEventListener("message",function R(S){let I;if(!S||!S.data)return;if(!function(e,E){for(let n of e)if(E===n||"*"===n||n instanceof RegExp&&n.test(E))return!0;return!1}(A,S.origin)){console.warn(`Invalid origin '${S.origin}' for comlink proxy`);return}let{id:O,type:r,path:s}=Object.assign({path:[]},S.data),i=(S.data.argumentList||[]).map(c);try{var L;let n=s.slice(0,-1).reduce((e,E)=>e[E],E),A=s.reduce((e,E)=>e[E],E);switch(r){case"GET":I=A;break;case"SET":n[s.slice(-1)[0]]=c(S.data.value),I=!0;break;case"APPLY":I=A.apply(n,i);break;case"CONSTRUCT":{let e=new A(...i);I=Object.assign(e,{[T]:!0})}break;case"ENDPOINT":{let{port1:n,port2:T}=new MessageChannel;e(E,T),L=[n],C.set(n,L),I=n}break;case"RELEASE":I=void 0;break;default:return}}catch(e){I={value:e,[t]:0}}Promise.resolve(I).catch(e=>({value:e,[t]:0})).then(e=>{let[T,A]=m(e);n.postMessage(Object.assign(Object.assign({},T),{id:O}),A),"RELEASE"===r&&(n.removeEventListener("message",R),N(n),a in E&&"function"==typeof E[a]&&E[a]())}).catch(e=>{let[E,T]=m({value:TypeError("Unserializable return value"),[t]:0});n.postMessage(Object.assign(Object.assign({},E),{id:O}),T)})}),n.start&&n.start()}(e,E),[n,[n]]},deserialize:e=>(e.start(),O(e))}],["throw",{canHandle:e=>S(e)&&t in e,serialize:({value:e})=>[e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[]],deserialize(e){if(e.isError)throw Object.assign(Error(e.value.message),e.value);throw e.value}}]]);function N(e){"MessagePort"===e.constructor.name&&e.close()}function O(e,E){return function e(E,n=[],T=function(){}){let a=!1,t=new Proxy(T,{get(T,A){if(r(a),A===R)return()=>{L&&L.unregister(t),s(E),a=!0};if("then"===A){if(0===n.length)return{then:()=>t};let e=_(E,{type:"GET",path:n.map(e=>e.toString())}).then(c);return e.then.bind(e)}return e(E,[...n,A])},set(e,T,A){r(a);let[R,t]=m(A);return _(E,{type:"SET",path:[...n,T].map(e=>e.toString()),value:R},t).then(c)},apply(T,R,t){r(a);let S=n[n.length-1];if(S===A)return _(E,{type:"ENDPOINT"}).then(c);if("bind"===S)return e(E,n.slice(0,-1));let[I,N]=o(t);return _(E,{type:"APPLY",path:n.map(e=>e.toString()),argumentList:I},N).then(c)},construct(e,T){r(a);let[A,R]=o(T);return _(E,{type:"CONSTRUCT",path:n.map(e=>e.toString()),argumentList:A},R).then(c)}});return!function(e,E){let n=(i.get(E)||0)+1;i.set(E,n),L&&L.register(e,E,e)}(t,E),t}(e,[],E)}function r(e){if(e)throw Error("Proxy has been released and is not useable")}function s(e){return _(e,{type:"RELEASE"}).then(()=>{N(e)})}let i=new WeakMap,L="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{let E=(i.get(e)||0)-1;i.set(e,E),0===E&&s(e)});function o(e){var E;let n=e.map(m);return[n.map(e=>e[0]),(E=n.map(e=>e[1]),Array.prototype.concat.apply([],E))]}let C=new WeakMap;function m(e){for(let[E,n]of I)if(n.canHandle(e)){let[T,A]=n.serialize(e);return[{type:"HANDLER",name:E,value:T},A]}return[{type:"RAW",value:e},C.get(e)||[]]}function c(e){switch(e.type){case"HANDLER":return I.get(e.name).deserialize(e.value);case"RAW":return e.value}}function _(e,E,n){return new Promise(T=>{let A=[,,,,].fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");e.addEventListener("message",function E(n){n.data&&n.data.id&&n.data.id===A&&(e.removeEventListener("message",E),T(n.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:A},E),n)})}}}]);