// Este é um boilerplate para formulários reativos - ou formulários orientados a modelo - para Angular.

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../data';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html'
})
export class CreateDataComponent {
  // Inicialização do DTO
  dto: Data = { };

  // Modelo do formulário
  form: FormGroup = this.fb.group({
    name: ['', Validators.required]
  });

  // Getters
  get name() { return this.createProductForm.get('name'); }

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
    // Aqui vai validações, atualização e envio do DTO para gravar na base de dados.
  }
}
