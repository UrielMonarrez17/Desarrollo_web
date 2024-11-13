import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/CoursesInside.css";
function CoursesInsideView() {
  return ( 
    <>
      <div class="header">
        <div class="title">Título</div>
        <div class="creator">Creador | Actualizado el</div>
      </div>
      <div class="video">Vídeo Descriptivo</div>
      <div class="buttons">
        <button class="add-to-list">Añadir a lista</button>
        <button class="start">Empezar!</button>
      </div>
      <div class="info">
        <div class="learn">
          <h3>Que se aprenderá</h3>
          <table>
            <tr>
              <td>Item 1</td>
            </tr>
            <tr>
              <td>Item 2</td>
            </tr>
            <tr>
              <td>Item 3</td>
            </tr>
          </table>
        </div>
        <div class="requirements">
          <h3>Requisitos</h3>
          <ul>
            <li>Requisito 1</li>
            <li>Requisito 2</li>
            <li>Requisito 3</li>
          </ul>
        </div>
      </div>
      <div class="content">
        <h3>Contenido</h3>
        <div class="topic">Tema 1</div>
        <div class="topic">Tema 2</div>
      </div>
    </>
  );
}
export default CoursesInsideView;
