import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hw2';

  index = 0;
  showBooks = false;
  endOfRating = false;


  public books = [
    {
      title: 'Дневникът на Анна Франк',
      description: 'Разказва историята на младо момиче по време на Холокоста, което води дневник, докато се крие от нацистите в Амстердам.',
      author: 'Анна Франк',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: 'Под игото',
      description: 'Роман, който разказва за българския народ по време на освобождението от османско владичество.',
      author: 'Иван Вазов',
      numberOfRatings: 0,
      rating: 0,
    },
    {
      title: 'Дъга',
      description: 'Поетична книга, която разглежда теми като природата, любовта и човешката душа.',
      author: 'Елин Пелин',
      numberOfRatings: 0,
      rating: 0,
    },

    {
      title: 'Бягство',
      description: 'Роман, който проследява историята на един млад мъж, който се опитва да избяга от собственото си минало и проблемите, които го преследват.',
      author: 'Димитър Димов',
      numberOfRatings: 0,
      rating: 0,
    },

    {
      title: 'Стъклен дом',
      description: 'Разказ, който разглежда живота на обикновените хора в едно малко българско село и техните мечти и страдания.',
      author: 'Петко Хиновски',
      numberOfRatings: 0,
      rating: 0,
    }
  ];


  //--------------

  rateBook(rating: number) {
    this.books[this.index].rating += rating;
    this.books[this.index].numberOfRatings++;
    if (this.index < this.books.length - 1) {
      this.index++;
    } else {
      this.showBooks = true;
    }
  }

  averageRating() {
    const numberOfRatings = this.books[this.index].numberOfRatings === 0 ? 1 : this.books[this.index].numberOfRatings;
    return (this.books[this.index].rating / numberOfRatings).toFixed(2);
  }

  restart() {
    this.index = 0;
    this.showBooks = false;
  }

  public successful() {
    this.endOfRating = true;
  }

}
