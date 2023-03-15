
1-film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.

SELECT rating, COUNT(*) FROM film GROUP BY rating;

2-film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.

SELECT replacement_cost, COUNT(*) FROM film
GROUP BY replacement_cost
HAVING COUNT(replacement_cost) > 50
ORDER BY count(*); 

3-customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir?

select store_id , count(*) from customer group by store_id

4-city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.

select country_id, count(*) from city gropu by country_id order by count(*) desc limit 1;
