package com.example.mobile.ui.home

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import com.example.mobile.model.ProductList
import com.example.mobile.repository.APIService

class HomeViewModel : ViewModel() {

    var list: LiveData<ProductList>

    init {
        list =  APIService.getProductList()
    }

    fun fetchAllData() : LiveData<ProductList> = list
}