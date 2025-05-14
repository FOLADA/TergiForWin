// src/components/Redaqtireba.jsx
import React, { useState } from 'react';
import './Redaqtireba.css';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const originalText = `XIX საუკუნის დასაწყისში თბილისი საგრძნობლად გაიზარდა. ამ დროს ქალაქში მხოლოდ მეტეხის ხიდი არსებობდა რაც ძალიან ართულებდა მტკვრის ორი ნაპირის ერთმანეთთან დაკავშირებას. კუკია-ჩუღურეთის მოსახლეობა მოწყვეტილი იყვნენ ქალაქის ცენტრალურ უბნებს, რომლებთანაც დაკავშირება დიდი ხნის განმავლობაში მხოლოდ შემოვლითი გზებით იყო შესაძლებელი. დღევანდელი ზაარბრიუკენის მოედანის მახლობლად დრო და დრო აშენებდნენ ხოლმე ხის ხიდს, რასაც ადიდებული მტკვარი იოლათ იტაცებდა. 40-იან წლებამდე მეფის მთავრობა უარს ამბობდა კაპიტალური ხიდის მშენებლობის დაფინანსებაზე. პროექტი, რომელიც მეფისნაცვალი ვორონცოვის დავალებით შეიქმნა ითვალისწინებდა ხიდის აგებას იმ ადგილას, სადაც მტკვარი ორ ნაწილად იყოფოდა და მათ შორის მადათოვის კუნძული იყო მოქცეული. პროექტის მიხედვით, ეს
იყო ნაგებობა რომელიც ორი, დიდი და მცირე, ხიდებისაგან შესდგებოდა. ხიდების შეერთების ადგილი რომ მყარი და სანდო ყოფილიყო კუნძულის შესაბამის ნაწილში უზარმაზარი მიწაყრილი გაკეთდა. ხიდის საზეიმო გახსნა 1853 წელს მოხდა. XX საუკუნის 30-იან წლებში მდინარის ტოტის დაშრობის გამო კუნძული გაქრა ხიდი კი შემორჩა და მას „მშრალი ხიდი“ დაერქვა.`;

const correctText = `XIX საუკუნის დასაწყისში თბილისი საგრძნობლად გაიზარდა. იმ დროს ქალაქში მხოლოდ მეტეხის ხიდი არსებობდა, რაც ძალიან ართულებდა მტკვრის ორივე ნაპირის ერთმანეთთან დაკავშირებას. კუკია-ჩუღურეთის მოსახლეობა მოწყვეტილი იყო ქალაქის ცენტრალურ უბნებს, რომლებთანაც დაკავშირება დიდი ხნის განმავლობაში მხოლოდ შემოვლითი გზებით იყო შესაძლებელი.

დღევანდელი ზაარბრიუკენის მოედნის მახლობლად დროდადრო აშენებდნენ ხის ხიდს, რომელსაც ადიდებული მტკვარი ადვილად იტაცებდა. 1840-იან წლებამდე მეფის მთავრობა უარს აცხადებდა კაპიტალური ხიდის მშენებლობის დაფინანსებაზე. პროექტი, რომელიც მეფისნაცვალ ვორონცოვის დავალებით შეიქმნა, ითვალისწინებდა ხიდის აგებას იმ ადგილზე, სადაც მტკვარი ორ ტოტად იყოფოდა და მათ შორის მადათოვის კუნძული მდებარეობდა.

პროექტის მიხედვით, ეს უნდა ყოფილიყო ნაგებობა, რომელიც ორი — დიდი და მცირე — ხიდისაგან შედგებოდა. ხიდების შეერთების ადგილი რომ მყარი და სანდო ყოფილიყო, კუნძულის შესაბამის ნაწილში უზარმაზარი მიწაყრილი გაკეთდა. ხიდის საზეიმო გახსნა 1853 წელს გაიმართა.

XX საუკუნის 30-იან წლებში, მდინარის ტოტის დაშრობის შედეგად, კუნძული გაქრა, ხიდი კი შემორჩა და მას „მშრალი ხიდი“ ეწოდა.`;

const Redaqtireba: React.FC = () => {
  const [userText, setUserText] = useState(originalText);
  const [highlightedWords, setHighlightedWords] = useState<React.ReactNode[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    const userWords = userText.replace(/\n/g, ' ').split(/\s+/);
    const correctWords = correctText.replace(/\n/g, ' ').split(/\s+/);
    const maxLength = Math.max(userWords.length, correctWords.length);

    const newHighlighted: React.ReactNode[] = [];
    const recs: string[] = [];

    for (let i = 0; i < maxLength; i++) {
      const u = userWords[i] || '';
      const c = correctWords[i] || '';

      if (u === c) {
        newHighlighted.push(
          <span key={i} className="correctred">{u}&nbsp;</span>
        );
      } else {
        newHighlighted.push(
          <span key={i} className="incorrectred">{u}&nbsp;</span>
        );
        if (u && c) {
          recs.push(`"${u}" → "${c}" | რეკომენდაცია: ${generateRecommendation(u, c)}`);
        }
      }
    }

    setHighlightedWords(newHighlighted);
    setRecommendations(recs);
    setChecked(true);
  };

  const generateRecommendation = (wrong: string, correct: string): string => {
    const strip = (txt: string) =>
      txt.replace(/[.,։՝՞‘’“”«»„]/g, '').toLowerCase();

    const w = strip(wrong), c = strip(correct);

    if (w === c) {
      return 'შესაძლოა პუნქტუაციაა გამოტოვებული ან არასწორად გამოყენებული.';
    }
    if (wrong.toLowerCase() === correct.toLowerCase()) {
      return 'შესაძლოა რეგისტრი (დიდი/პატარა ასო) არასწორად გამოიყენე.';
    }
    if (w.endsWith('დნენ') && c.endsWith('იყო')) {
      return 'ერთობითი და მრავლობითი ფორმა აგერია — დააკვირდი ზმნის ფორმას.';
    }
    if (w.includes('რომელ') && c.includes('რომელ')) {
      return 'მრავლობითი ფორმა არასწორად გამოიყენე.';
    }
    if (Math.abs(wrong.length - correct.length) > 5) {
      return 'სიტყვა მნიშვნელოვნად განსხვავდება — სცადე აზრობითი ანალიზი.';
    }
    return 'სტილისტიკური ან მორფოლოგიური შეცდომაა — სცადე უკეთ დააკვირდე ტექსტის ფორმულირებას.';
  };

  return (
    <>
      <Link to="/რედაქტირება" className="back-button" aria-label="უკან დაბრუნება">
        <FiArrowLeft className="button-icon" />
        <span>უკან დაბრუნება</span>
      </Link>

      <div className="exercise-container">
        <h2>დაარედაქტირე ტექსტი:</h2>
        <textarea
          className="text-input-redactireba"
          rows={14}
          value={userText}
          onChange={e => setUserText(e.target.value)}
        />
        <button className="button-redactireba" onClick={handleCheck}>
          შეამოწმე
        </button>

        {checked && (
          <>
            <div className="highlighted-text-redactireba">
              <h3>შესწორებული ტექსტი:</h3>
              <p>{highlightedWords}</p>
            </div>

            {recommendations.length > 0 && (
              <div className="recommendationsredact">
                <h3>რეკომენდაციები:</h3>
                <ul>
                  {recommendations.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Redaqtireba;
