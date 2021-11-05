import React from 'react'

export default function Add_article() {
    return (
        <div>
            <h1 className="title">Pages création d'article</h1>
            <h1 className="title">pages Admin</h1>
            <form action="" method="POST" class="contact-form">
              <div class="contact-form__row">
                    <div>
                        
                        <label for="">Nom de l'article</label> 
                        <input type="text" name="nom" id="nom" value="nom de l'article" />
                        
                    </div>
                    <input class="contact-form__item" type="text" name="lastname" value="" placeholder="Nom"/>
                </div>
                
                <div class="contact-form__row contact-form__row-bottom">
                
                    <label class="contact-form__label" for="categorie">
                        choisissez une catégorie
                    </label>
                    <select class="contact-form__item" name="categorie" id="categorie">
                        <option value="">choisir</option>
                        <option value="f">F</option>
                        <option value="t">T</option>
                        <option value="autre">Autre</option>
                    </select>
                </div>

                <div class="contact-form__row">
                   
                    <label class="contact-form__label" for="messageTextarea">
                        Desciptions:
                        
                    </label>
                </div>
                <div class="contact-form__row contact-form__row-bottom">
                    <textarea class="contact-form__item contact-form__item-textarea" name="message" id="messageTextarea"
                        placeholder="Votre message">Description de l'annonce</textarea>
                </div>

                

                <div class="contact-form__row contact-form__row-bottom">
                    <label for="fileUpload">Ajouter un fichier :</label>&nbsp;
                    <input type="file" name="file" id="fileUpload"/>
                </div>
         
                <button class="contact-form__submit">Envoyer</button>
            
                <input type="reset" class="contact-form__submit" value="Annuler"  />
            </form>
        </div>
    )
}
