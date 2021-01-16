const stopWords = ["i", "me", "my", "myself", "we", "our", "ours", 
                    "ourselves", "you", "your", "yours", "yourself", 
                    "yourselves", "he", "him", "his", "himself", "she", 
                    "her", "hers", "herself", "it", "its", "itself", "they", 
                    "them", "their", "theirs", "themselves", "what", "which", 
                    "who", "whom", "this", "that", "these", "those", "am", 
                    "is", "are", "was", "were", "be", "been", "being", "have", 
                    "has", "had", "having", "do", "does", "did", "doing", "a", 
                    "an", "the", "and", "but", "if", "or", "because", "as", 
                    "until", "while", "of", "at", "by", "for", "with", "about", 
                    "against", "between", "into", "through", "during", "before", 
                    "after", "above", "below", "to", "from", "up", "down", "in", 
                    "out", "on", "off", "over", "under", "again", "further", 
                    "then", "once", "here", "there", "when", "where", "why", "how", 
                    "all", "any", "both", "each", "few", "more", "most", "other", 
                    "some", "such", "no", "nor", "not", "only", "own", "same", 
                    "so", "than", "too", "very", "s", "t", "can", "will", 
                    "just", "don", "should", "now"];

let testString = "hello hello yesh"

function retrieveHistoricGratefuls() {
    let historicGratefuls = JSON.parse(localStorage.getItem('historicGratefuls'));
    words = ''
    
    for (let i = 0; i < historicGratefuls.length; i++) {
        words += `${historicGratefuls[i].grateful} `
    }

    wordCloud(words)

}

function wordCloud(words) {
    let myConfig = {
        graphset: [{
            id: "worcloud",
            height: '75%',
            width: "100%",
            type: "wordcloud",
            title: {
            text: "All the things your grateful for",
            fontSize: 16
            },
            options: {
            ignore: stopWords,
            maxFontSize: 48,
            text: words,
            palette: ['#bdc3c7', '#1abc9c', '#3498db', '#9b59b6', '#f1c40f', '#e74c3c', '#2ecc71', '#e67e22']
            }
        }]
    }
}                    



wordCloud

