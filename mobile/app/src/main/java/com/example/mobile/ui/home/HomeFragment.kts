package com.example.mobile

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProviders
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.mobile.adapter.ProductAdapter
import com.example.mobile.model.ProductList
import com.example.mobile.R
import io.paperdb.Paper
import kotlinx.android.synthetic.main.fragment_home.*

class HomeFragment : Fragment() {

    companion object {
        fun newInstance() = HomeFragment()
    }

    private lateinit var homeViewModel: HomeViewModel
    private lateinit var adapter : ProductAdapter
    var data: ProductList = ProductList()

    override fun onStop() {
        if (adapter != null)
            adapter.onStop()
        super.onStop()
    }

    override fun onCreateView(
            inflater: LayoutInflater,
            container: ViewGroup?,
            savedInstanceState: Bundle?
    ): View? {
        return inflater.inflate(R.layout.fragment_home, container, false)
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)
        Paper.init(context)

        recycler_product_list.layoutManager = LinearLayoutManager(context)

        adapter = ProductAdapter(context!!, data)
        recycler_product_list.adapter = adapter

        homeViewModel = ViewModelProviders.of(this).get(HomeViewModel::class.java)

        homeViewModel.fetchAllData().observe(this, object: Observer<ProductList> {
            override fun onChanged(t: ProductList) {

                adapter.addItems(t)
            }

        })
    }

}