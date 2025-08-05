
let word = document.getElementById('word-input');
let check = document.getElementById('check-btn');
let count = document.getElementById('total-word')
let refresh = document.getElementById('refresh-btn')
let alertmsg = document.getElementById('alretmsg')

check.addEventListener('click',()=>{
          let str = word.value.trim();
          if(str == ""){
              let myModal = new bootstrap.Modal(document.getElementById('alretmsg'));
          myModal.show(); 

          }else{
            let arr = str.trim().split(/\s+/).join(" ").split(" ");
            count.innerHTML = arr.length
          }
})


refresh.addEventListener('click',()=>{
     word.value = ""
     count.innerHTML = 0
})












let vowel_word = document.getElementById('vowel-word-input');
let vowel_check = document.getElementById('vowel-check-btn');
let vowel_count = document.getElementById('vowel-total-word')
let vowel_refresh = document.getElementById('vowel-refresh-btn')
let vowel_alertmsg = document.getElementById('vowel-alretmsg')



vowel_check.addEventListener('click',()=>{
        let counter = 0
        let str = vowel_word.value;
        if(str == ""){
            let myModal = new bootstrap.Modal(document.getElementById('vowel_alretmsg'));
          myModal.show(); 
        } else{
 let arr = str.trim().split(/\s+/).join("").split("");

            arr.forEach(element => {
                 if("aeiouAEIOU".includes(element)){
                       counter ++;
                 }
                });
                vowel_count.innerHTML = counter;                 
        }
       

})


vowel_refresh.addEventListener('click',()=>{
         vowel_word.value = ""
         vowel_count.innerHTML = 0
})















let string = "Generally, a 200-line paragraph is highly unusual and not recommended in most writing styles. Paragraphs are typically much shorter, serving to organize and present distinct ideas, with each paragraph focusing on a single main idea. The length of a paragraph is usually determined by the content and the flow of the ideas, not by an arbitrary line count. Some writing styles, like journalistic writing, even emphasize very short paragraphs to maintain reader engagement, with one-sentence paragraphs being acceptable. In academic or technical writing, paragraphs typically contain a few sentences developing a single idea, and excessive length can make the text intimidating or difficult to follow. However, if you're exploring the concept of a 200-line paragraph as a creative exercise, consider the following What idea or thought is so extensive and interconnected that it would require 200 lines to fully express within a single paragraph? This could be a stream of consciousness, an elaborate description, or a deep dive into a multifaceted issue. Coherence and Flow: Even with a long paragraph, maintaining coherence is crucial. Ensure that each sentence logically connects to the next and that the ideas flow smoothly, potentially using transition words and phrases to guide the reader. Supporting Details: A lengthy paragraph necessitates robust supporting details to elaborate on the main idea. This could involve facts, examples, statistics, personal experiences, or descriptive language, depending on the topic.Visuals and  Consider the impact of a very long paragraph on the reader. While it may convey a sense of density or depth, it can also be visually overwhelming. If this is an intentional artistic choice, be aware of the effect it may have on the reader's experience. Alternative  In most writing, breaking a large idea into multiple paragraphs is a more common and often more effective way to manage complexity and maintain reader engagement. While there are no absolute rules governing paragraph length, the conventions of effective writing emphasize clarity, focus, and readability. A 200-line paragraph is a departure from these norms and would likely require careful consideration of its purpose and impact on the reader. AI responses may include mistakes. Learn more While the structure and flow of writing generally favor shorter paragraphs to enhance readability and organization, especially in online or journalistic contexts, it's not impossible to conceive of a single paragraph that approaches 500 lines, particularly in certain genres or as a deliberate stylistic choice. How Many Paragraphs Is 500 Words? Tips and Examples My Motherland Essay in English for Classes How Many Pages is 500 Word Essay? & Other Tips for Your How Many Paragraphs Is 500 Words? Tips and Examples Are You Wondering How Long Is 500 Words? Here's How! In such a hypothetical 500-line paragraph, here's what you might A Deep Dive into a Single, Complex The paragraph would need to center around one overarching concept, expanding on it through extensive detail, explanation, and development. Rich Supporting This would necessitate a wealth of evidence, examples, descriptions, analysis, or narrative threads intricately woven together to fully explore the chosen idea. Seamless Even within a massive paragraph, effective transitions between sentences and sub-points would be crucial to maintain coherence and prevent the reader from getting lost. A Unique Purpose or A paragraph of this magnitude would likely be intended to create a specific impact, perhaps conveying the intensity of a stream of consciousness, capturing the complexity of a situation, or highlighting the interconnectedness of seemingly disparate elements. Consideration of the Reader's Experience: While unconventional, if attempted in a formal setting, careful consideration of readability and the potential for reader fatigue would be paramount, potentially prompting the use of formatting or other stylistic choices to aid comprehension. However A 500-line paragraph would be a significant departure from standard writing conventions. For most writing purposes, breaking down complex ideas into shorter, focused paragraphs is generally recommended. The visual impact of a single, lengthy paragraph can be overwhelming for readers. Ultimately, the feasibility and effectiveness of a 500-line paragraph would depend on the specific context, audience, and the author's intent. While the concept pushes the boundaries of traditional paragraph structure, it's not strictly impossible in certain creative or academic contexts. However, it would require meticulous attention to coherence, detail, and reader experience to ensure the paragraph serves its purpose effectively." 


let stringGenretor = (stringinput)=>{
let converarr = string.split(" ");
let Genretstring = "";
  
for(let i = 0;i<stringinput.value;i++){
    Genretstring += converarr[i]+ " ";
}
  stringinput.setAttribute('value',0)
return Genretstring;
}


document.querySelector('#generateBtn').addEventListener('click',()=>{
  let stringinput = document.querySelector('#lengthInput');
  document.querySelector('#output').innerHTML = stringGenretor(stringinput)
})












