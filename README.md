# Dziennik dewelopera

## Czwartek 5.12.2019 - rozpoczęcie prac nad projektem
    **FRONTEND**:
        - instalacja **Create-React-App**;
        - stworzenie repozytorium **GitHub**, integracja z projektem (*SSH key*);
        - wybór biblioteki **Ant Design** do struktury komponentów Reacta;
        - stworzenie przykładowej struktury strony głównej (wstępne zapoznanie z Ant Design).

    **BACKEND**:
        - przypomnienie podstaw pracy z MongoDB;
        - instalacja **MongoDB**;
        - instalacja **Express.js** i **Nodemon**, stworzenie *serwera Node.js*;
        - połączenie MongoDB z Express.js (get);
        - stworzenie w MongoDB pierwszej kolekcji merytorycznej (K&M - Budynki);

    **INNE**: założenie dziennika deweloperskiego.

## Piątek 6.12.2019 - początki zabawy z REST API, Reduxem, integracja FE z BE
    **FRONTEND**:
        - instalacja **react-router-dom** i stworzenie pierwszego routingu (3 podstrony);
        - podział generalnej struktury aplikacji na komponenty globalne (nagłówek, panel boczny, stopka i obszar zawartości);
        - standaryzacja komponentów i ich nazw;
        - drobne modyfikacje styli i routów;
        - instalacja **redux** oraz **react-redux**;
        - zaaplikowanie store'a oraz pierwszych akcji i reducerów;
        - pierwsze zapytanie GET do API (budynki K&M);
        - stworzenie pliku z adresem do backendu, poddanym destrukturyzacji;
        - instalacja **react-thunk** i stworzenie za jego pomocą middleware dla aplikacji.

    **BACKEND**:
        - instalacja biblioteki **cors** dla Express.js;
        - dodanie adresu frontendu na whitelist - rozwiązanie problemu z CORS;

    **INNE**: stylizacja dziennika deweloperskiego (format .md).

## Sobota 7.12.2019 - generowanie pierwszej tabeli i porządki w projekcie
    **FRONTEND**:
        - stworzenie tabeli budynków K&M na bazie komponentów Ant Design (struktura), 
        - zmapowanie kolekcji MongoDB (treść) do w/w tabeli,
        - rozwiązanie problemów technicznych,
        - dodanie obrazków do projektów (folder img),
        - uporządkowanie aplikacji w ramach nowych katalogów:
            > _store dla _actions i _reducers,
            > _config dla plików konfiguracyjnych (typu adress.js),
            > App dla głównego komponentu aplikacji (+ style i testy),
        - zmiany ścieżek, usunięcie zbędnych plików (logo.svg) i inne drobiazgi,
        - mała aktualizacja nawigacji;

    **INNE*: walka z maszynami, literówkami i błędami.

## Niedziela 8.12.2019 - prace nad generowaniem grafik
    **FRONTEND**:
        - instalacja biblioteki **react-images**,
        - dodanie pierwszych obrazków do tabeli budynków K&M:
            > grafiki budynków z wykorzystaniem funkcji map() komponentu <Img /> z w/w biblioteki,
            > ikony kosztów z użyciem komponentu <Img />,
        - prace nad generowaniem pozostałych obrazków z wykorzystaniem m. in. funkcji map() oraz wyrażeń regularnych,
    
    **INNE**: bieżące rozwiązywanie problemów technicznych, głównie dot. połączenia z MongoDB.

## Poniedziałek 9.12.2019 - generowanie grafik i nowa funkcjonalność
    **FRONTEND**:
        - dodanie kolejnych obrazków do tabeli budynków K&M:
            > surowce z wykorzystaniem kombinacji map() oraz wyrażeń regularnych i komponentu <Img />,
            > pracownicy z użyciem wyrażeń regularnych i w/w komponentu,
            > ikony budynków pod ich nazwami,
        - zmiany w organizacji katalogu img (m. in. usunięcie podfolderów w jednostkach i zmiany nazw plików),
        - poprawki w bazie danych,
        - destrukturyzacja, refaktoryzacja, uczynienie komponentu względnie szablonowym dla kolejnych podstron,
        - modyfikacja katalogu public (zmiany w index.html, nowe logo i favicon, usunięcie zbędnych plików),
        - stworzenie komponentu Jednostek K&M na bazie budynków:
            > nowy fetch, akcja i reducer oraz adres backendu,
            > połączenie komponentu frontendowego z endpointem w backendzie,
            > stworzenie dynamicznej tabeli z tekstami importowanymi z bazy oraz grafikami wyrenderowanymi z katalogu img,
            > destrukturyzacja, refaktoryzacja, poprawki w kodzie.
        
    **BACKEND**:
        - nowy endpoint dla jednostek K&M (z użyciem kolekcji MongoDB),
        - drobne poprawki w kolekcji MongoDB oraz nazwach plików img.

## Wtorek 10.12.2019 - początek prac nad logowaniem i autoryzacją
    **BACKEND**: 
        - zapoznanie z dokumentacją oraz materiałami na temat JWT i autoryzacji w ogólności,
        - instalacja biblioteki **jsonwebtoken**,
        - rozszerzenie API o przykładową i wstępną autoryzację z wykorzystaniem JWT (metody POST).
