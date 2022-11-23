<template>
  <div>  
    <opener>        
        <template v-slot:header>
          Пустой шаблон
        </template>
        <template v-slot:main>
          <CodeLine>
            <pre>
&lt;template&gt;
&lt;div&gt;&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
name: ''
}
&lt;/script&gt;

&lt;style scoped&gt;
&lt;/style&gt;
            </pre>        
          </CodeLine>
        </template>
      </opener>
      
      <opener>        
        <template v-slot:header>
          Opener
        </template>
        <template v-slot:main>
          <CodeLine>
            <pre>
&lt;opener&gt;
  &lt;template v-slot:header&gt;
  &lt;/template&gt;
  &lt;template&gt;
    &lt;CodeLine&gt;
      &lt;pre&gt;
      &lt;/pre&gt;    
    &lt;/CodeLine&gt;
  &lt;/template&gt;
&lt;/opener&gt;
            </pre>        
          </CodeLine>
        </template>
      </opener>
  </div>
  </template>
  
  <script>
import {CodeLine, Opener} from '../commons'

export default {
  name: 'CodeBlocks',
  components: {
    CodeLine, Opener
  }  
}
  </script>
  
  <style scoped>
  </style>
              