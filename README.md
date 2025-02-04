# <img width="30px" src="src/assets/logo-icon.png"> Lingo Bingo: A Vocabulary Learning App
LINGO-BINGO is an interactive Japanese language learning app designed to enhance vocabulary retention and communication skills. It offers engaging exercises, flashcards, and quizzes to make learning fun and effective. Users can log in via Firebase for a personalized experience and track progress. The app simplifies language acquisition, helping learners memorize words effortlessly while improving pronunciation and usage. With a single click, users can start their journey to mastering Japanese vocabulary in an enjoyable and efficient way.

## **Key Features of the Project**

1.  **User Authentication:** Firebase-based login and registration with Google authentication.
2.  **Vocabulary Learning:** Displays words with pronunciation, meaning, part of speech, and usage examples.
3.  **Lesson-Based Learning:** Users can access vocabulary divided into 10 structured lessons.
4.  **Interactive Animations:** Enhances UI with smooth animations for an engaging experience.
5.  **Success Counter:** Displays animated user count, lesson count, and vocabulary count dynamically.

## **NPM Packages I have  Used**

1.  **AOS (Animate on Scroll):** Used for adding smooth scroll-based animations.
    
    -   **Installation:** `npm install aos`
    -   **Usage:** Applied on homepage sections for interactive UI.
2.  **React CountUp:** Used to animate numerical values (e.g., success statistics).
    
    -   **Installation:** `npm install react-countup`
    -   **Usage:** Displays animated counters for lessons, users, and vocabulary counts.
3. **React Visibility Sensor:** Ensures that React CountUp animations trigger only when visible.

	-   **Installation:** `npm install react-visibility-sensor`
	-   **Usage:** Wrapped around CountUp components to animate only when they appear in the viewport.

## Project live link 🔗
[Lingo Bingo: A Vocabulary Learning App](https://sdx86-lingo-bino.netlify.app/home)
