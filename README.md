**1. Быстрый старт**  
    npm run start - сборка папки build + server + watch  
    npm run start --production - сборка папки prod 

**2. Версия node**    
   Использовать node версии не ниже 16.14.0.  
   С более низкой версией конфликтуют lint-stages.
   
**3. Git.**
  Основная ветка master

**4. Важно учесть:**  
- у каждой svg-картинки для svg-sprite должен быть прописан viewBox. Иначе изображение в теге use не будет масштабироваться.  
