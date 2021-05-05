<template>
  <v-card>
    <v-card-title> Prize List </v-card-title>
    <v-data-table
      :headers="tableHeaders"
      :items="prizeList"
      :loading="isLoading"
      :search="searchPrize"
      item-key="id"
      outlined
    >
      <template #top>
        <v-toolbar flat>
          <v-dialog
            v-model="prizeDialog"
            max-width="650px"
            @click:outside="closePrizeDialog"
          >
            <template #activator="{ on, attrs }">
              <v-btn
                small
                v-bind="attrs"
                data-testid="new-prize-button"
                v-on="on"
              >
                <v-icon small> mdi-plus </v-icon>
                New
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Create Prize</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="prizeModel.name"
                        label="Name"
                        filled
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-select
                        v-model="prizeModel.type"
                        filled
                        :items="prizeTypeOptions"
                        label="Type"
                      />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="prizeModel.amount"
                        label="Amount"
                        filled
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="6">
                      <v-select
                        v-model="prizeModel.currency"
                        filled
                        :disabled="prizeModel.type !== 'cash'"
                        :items="prizeCurrencyOptions"
                        label="Currency"
                      />
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        v-model="prizeModel.winner_count"
                        label="Winner Count"
                        type="number"
                        filled
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="closePrizeDialog">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="savePrize">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="prizeImportDialog" max-width="500px">
            <template #activator="{ on, attrs }">
              <v-btn small v-bind="attrs" class="mx-2" v-on="on">
                <v-icon small> mdi-plus </v-icon>
                Bulk Import
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Import Prizes</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-file-input
                        v-model="prizeCsvFile"
                        label="Csv File"
                      ></v-file-input>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="closePrizeImportDialog"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  :loading="isImporting"
                  @click="importPrizes"
                >
                  Import
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn small @click="exportCsv">
            <v-icon small> mdi-download </v-icon>
            Export CSV
          </v-btn>
          <v-spacer />
          <v-text-field
            v-model="searchPrize"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-toolbar>
      </template>
      <template #item.stock.name="{ item }">
        <v-tooltip bottom>
          <template #activator="{ on, attrs }">
            <span v-bind="attrs" v-on="on">{{ item.stock.name }}</span>
          </template>
          <span>{{ item.id }}</span>
        </v-tooltip>
      </template>
      <template #item.actions="{ item }">
        <v-dialog
          v-model="prizeDialog"
          max-width="650px"
          @click:outside="closePrizeDialog"
        >
          <template #activator="{ on, attrs }">
            <v-btn
              color="primary"
              small
              v-bind="attrs"
              v-on="on"
              @click="selectPrize(item)"
            >
              <v-icon small> mdi-pen </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Edit Prize</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="prizeModel.name"
                      label="Name"
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-select
                      v-model="prizeModel.type"
                      filled
                      :items="prizeTypeOptions"
                      label="Type"
                    ></v-select>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="prizeModel.amount"
                      label="Amount"
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-select
                      v-model="prizeModel.currency"
                      filled
                      :disabled="prizeModel.type !== 'cash'"
                      :items="prizeCurrencyOptions"
                      label="Currency"
                    ></v-select>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="prizeModel.winner_count"
                      label="Winner Count"
                      type="number"
                      filled
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closePrizeDialog">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="updatePrize">
                Update
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-confirm-button
          class="p-1"
          icon="mdi-trash-can-outline"
          tool-tip-text="Delete"
          :action="deletePrize(item)"
          message="Are you sure about that?"
        />
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import VConfirmButton from '@/components/VConfirmButton'

export default {
  name: 'PrizeManagement',
  components: {
    VConfirmButton,
  },
  props: {
    prizeList: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    competitionId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      searchPrize: '',
      prizeCsvFile: null,
      prizeDialog: false,
      prizeImportDialog: false,
      isImporting: null,
      prizeModel: {
        name: null,
        amount: null,
        winner_count: 1,
        type: null,
        currency: null,
      },
      tableHeaders: [
        {
          text: 'Name',
          align: 'start',
          sortable: true,
          value: 'stock.name',
        },
        { text: 'Type', value: 'stock.type', sortable: true },
        { text: 'Currency', value: 'stock.currency' },
        { text: 'Amount', value: 'stock.amount', sortable: true },
        { text: 'Quantity', value: 'winner_count' },
        { text: 'Actions', value: 'actions', sortable: false, width: 200 },
      ],
      prizeTypeOptions: [
        { value: 'cash', text: 'Cash' },
        { value: 'goods', text: 'Goods' },
        { value: 'digital', text: 'Digital' },
      ],
      prizeCurrencyOptions: [
        { value: 'GBP', text: 'GBP' },
        { value: 'USD', text: 'USD' },
        { value: 'EUR', text: 'EUR' },
      ],
    }
  },
  methods: {
    selectPrize(selectedPrize) {
      this.prizeModel.name = selectedPrize.stock.name
      this.prizeModel.type = selectedPrize.stock.type
      this.prizeModel.winner_count = selectedPrize.winner_count
      this.prizeModel.amount = selectedPrize.stock.amount
      this.prizeModel.currency = selectedPrize.stock.currency
      this.prizeModel.id = selectedPrize.id
    },
    async savePrize() {
      const responseData = await this.$axios.post(
        process.env.ADMIN_PRIZES_CREATE,
        {
          ...{ ...this.prizeModel, competition_id: this.competitionId },
        }
      )
      if (responseData && responseData.status === 'success') {
        this.closePrizeDialog()
      }
    },
    deletePrize(item) {
      return () =>
        this.$axios.post(process.env.ADMIN_PRIZES_DELETE, {
          id: item.id,
        })
    },
    closePrizeImportDialog() {
      this.prizeCsvFile = null
      this.prizeImportDialog = false
    },
    closePrizeDialog() {
      this.prizeDialog = false
      const vm = this
      Object.keys(this.prizeModel).forEach(function (index) {
        vm.prizeModel[index] = null
      })
      this.$emit('closed')
    },
    async updatePrize() {
      const responseData = await this.$axios.post(
        process.env.ADMIN_PRIZES_UPDATE,
        {
          ...{ ...this.prizeModel, competition_id: this.competitionId },
        }
      )
      if (responseData && responseData.status === 'success') {
        this.closePrizeDialog()
      }
    },
    importPrizes() {
      this.isImporting = true
      const vm = this
      this.csvResult = this.$papa.parse(this.prizeCsvFile, {
        header: true,
        async complete(results) {
          await vm.$axios.post(process.env.ADMIN_PRIZES_BULK_CREATE, {
            prizes: results.data,
          })
          vm.isImporting = false
          await vm.getCompetition()
          vm.prizeImportDialog = false
        },
      })
    },
    exportCsv() {
      const csv = this.$papa.unparse(this.prizeList)
      // define file content, type must be Blob, otherwise createObjectURL will give error
      const content = new Blob([csv])
      // generate url object
      const urlObject = window.URL || window.webkitURL || window
      const url = urlObject.createObjectURL(content)
      // generate <a></a> DOM element
      const el = document.createElement('a')
      el.setAttribute('href', url)
      el.setAttribute('download', `Competition Prizes CSV-${Date.now()}.csv`)
      // must click otherwise will not download
      el.click()
      // remove link and release source
      urlObject.revokeObjectURL(url)
    },
  },
}
</script>
