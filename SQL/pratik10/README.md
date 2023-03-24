


1-city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.

select city , country from city 
LEFT JOIN country ON city.city_id = country.country_id ;

2-customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.

select payment_id , first_name , last_name from customer 
RIGHT JOIN payment ON customer.store_id = payment.staff_id ;

3-customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.

select rental_id , first_name , last_name from customer
FULL JOIN rental ON customer.store_id = rental.staff_id ;