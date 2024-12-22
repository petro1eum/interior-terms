import html2pdf from 'html2pdf.js';

const pdfOptions = {
  margin: [10, 10, 10, 10],
  image: { type: 'jpeg', quality: 1 },
  html2canvas: { 
    scale: 2,
    useCORS: true,
    letterRendering: true
  },
  jsPDF: { 
    unit: 'mm', 
    format: 'a4', 
    orientation: 'portrait',
    compress: true
  }
};

// Экспорт отдельной страницы
export const exportStageToPdf = async (stageInfo) => {
  try {
    const element = document.createElement('div');
    element.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <!-- Шапка -->
        <div style="text-align: center; margin-bottom: 30px; page-break-after: always;">
          <h1 style="font-size: 24px; margin-bottom: 10px;">
            InteriorTerms Matrix v1.0
          </h1>
          <div style="font-size: 20px; margin-bottom: 5px;">
            ${stageInfo.id} — ${stageInfo.title}
          </div>
          <div style="color: #666;">
            ${stageInfo.fullName}
          </div>
        </div>

        <!-- Описание -->
        <div style="margin-bottom: 30px; page-break-inside: avoid;">
          <h2 style="font-size: 18px; margin-bottom: 10px; color: #2563eb;">Описание</h2>
          <div style="page-break-inside: avoid;">
            <p>${stageInfo.description.full}</p>
            <p style="color: #666; margin-top: 10px;">${stageInfo.description.scope}</p>
          </div>
        </div>

        <!-- Обязанности и работы -->
        ${Object.entries(stageInfo.responsibilities).map(([key, resp]) => `
          <div style="margin-bottom: 30px; page-break-inside: avoid;">
            <h2 style="font-size: 18px; margin-bottom: 10px; color: #2563eb;">${resp.title}</h2>
            <div style="page-break-inside: avoid;">
              <p style="margin-bottom: 15px;">${resp.description}</p>

              <!-- Включенные работы -->
              <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <h3 style="font-size: 16px; color: #1e40af; margin-bottom: 10px;">Включено в этап:</h3>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  ${resp.included.map(item => `
                    <div style="background: white; padding: 12px; border-radius: 8px;">
                      <div style="font-weight: 500; margin-bottom: 8px;">${item.title}</div>
                      ${item.details ? `
                        <div style="color: #666; font-size: 14px; margin-bottom: 8px;">${item.details}</div>
                      ` : ''}
                      ${item.items ? `
                        <ul style="margin: 0; padding-left: 20px; color: #666; font-size: 14px;">
                          ${item.items.map(subItem => `
                            <li style="margin-bottom: 4px;">${subItem}</li>
                          `).join('')}
                        </ul>
                      ` : ''}
                      ${item.elements ? `
                        <ul style="margin: 0; padding-left: 20px; color: #666; font-size: 14px;">
                          ${item.elements.map(element => `
                            <li style="margin-bottom: 4px;">${element}</li>
                          `).join('')}
                        </ul>
                      ` : ''}
                      ${item.stages ? `
                        <ul style="margin: 0; padding-left: 20px; color: #666; font-size: 14px;">
                          ${item.stages.map(stage => `
                            <li style="margin-bottom: 4px;">${stage}</li>
                          `).join('')}
                        </ul>
                      ` : ''}
                      ${item.variants ? `
                        <ul style="margin: 0; padding-left: 20px; color: #666; font-size: 14px;">
                          ${item.variants.map(variant => `
                            <li style="margin-bottom: 4px;">${variant}</li>
                          `).join('')}
                        </ul>
                      ` : ''}
                      ${item.options ? `
                        <ul style="margin: 0; padding-left: 20px; color: #666; font-size: 14px;">
                          ${item.options.map(option => `
                            <li style="margin-bottom: 4px;">${option}</li>
                          `).join('')}
                        </ul>
                      ` : ''}
                      ${item.views ? `
                        <ul style="margin: 0; padding-left: 20px; color: #666; font-size: 14px;">
                          ${item.views.map(view => `
                            <li style="margin-bottom: 4px;">${view}</li>
                          `).join('')}
                        </ul>
                      ` : ''}
                      ${item.limit ? `
                        <div style="color: #666; font-size: 14px; margin-bottom: 8px;">
                          Лимит: ${item.limit}
                        </div>
                      ` : ''}
                      ${item.frequency ? `
                        <div style="color: #666; font-size: 14px; margin-bottom: 8px;">
                          Периодичность: ${item.frequency}
                        </div>
                      ` : ''}
                      ${item.deliverable ? `
                        <div style="color: #666; font-size: 14px; margin-bottom: 8px;">
                          Результат: ${item.deliverable}
                        </div>
                      ` : ''}
                      ${item.reporting ? `
                        <div style="color: #666; font-size: 14px; margin-bottom: 8px;">
                          Отчетность: ${item.reporting}
                        </div>
                      ` : ''}
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Обязанности исполнителя -->
              ${resp.executorResponsibilities ? `
                <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                  <h3 style="font-size: 16px; color: #166534; margin-bottom: 10px;">Обязанности исполнителя:</h3>
                  <ul style="margin: 0; padding-left: 20px;">
                    ${resp.executorResponsibilities.map(item => `
                      <li style="margin-bottom: 5px;">${typeof item === 'object' ? item.title : item}</li>
                    `).join('')}
                  </ul>
                </div>
              ` : ''}

              <!-- Обязанности заказчика -->
              ${resp.clientResponsibilities ? `
                <div style="background: #fff7ed; padding: 15px; border-radius: 8px;">
                  <h3 style="font-size: 16px; color: #9a3412; margin-bottom: 10px;">Обязанности заказчика:</h3>
                  <ul style="margin: 0; padding-left: 20px;">
                    ${resp.clientResponsibilities.map(item => `
                      <li style="margin-bottom: 5px;">${typeof item === 'object' ? item.title : item}</li>
                    `).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          </div>
        `).join('')}

        <!-- Результаты работ -->
        ${stageInfo.deliverables ? `
          <div style="margin-bottom: 30px; page-break-inside: avoid;">
            <h2 style="font-size: 18px; margin-bottom: 10px; color: #2563eb;">Результаты работ</h2>
            ${stageInfo.deliverables.map(del => `
              <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <h3 style="font-size: 16px; margin-bottom: 5px;">${del.title}</h3>
                <p style="color: #666; margin-bottom: 10px;">Формат: ${del.format}</p>
                <ul style="margin: 0; padding-left: 20px;">
                  ${del.contents.map(item => `<li style="margin-bottom: 5px;">${item}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Не включено -->
        ${stageInfo.excluded ? `
          <div style="margin-bottom: 30px; page-break-inside: avoid;">
            <h2 style="font-size: 18px; margin-bottom: 10px; color: #dc2626;">Не включено</h2>
            ${Object.entries(stageInfo.excluded).map(([category, items]) => `
              <div style="background: #fef2f2; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <h3 style="font-size: 16px; color: #991b1b; margin-bottom: 10px; text-transform: capitalize;">
                  ${category}
                </h3>
                <ul style="margin: 0; padding-left: 20px;">
                  ${items.map(item => `<li style="margin-bottom: 5px;">${item}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Риски -->
        ${stageInfo.risks ? `
          <div style="margin-bottom: 30px; page-break-inside: avoid;">
            <h2 style="font-size: 18px; margin-bottom: 10px; color: #ca8a04;">Риски</h2>
            <div style="background: #fefce8; padding: 15px; border-radius: 8px;">
              ${typeof stageInfo.risks === 'object' && !Array.isArray(stageInfo.risks) 
                ? Object.entries(stageInfo.risks).map(([category, items]) => `
                  <div style="margin-bottom: 15px;">
                    <h3 style="font-size: 16px; color: #854d0e; margin-bottom: 10px; text-transform: capitalize;">
                      ${category}
                    </h3>
                    <ul style="margin: 0; padding-left: 20px;">
                      ${items.map(item => `<li style="margin-bottom: 5px;">${item}</li>`).join('')}
                    </ul>
                  </div>
                `).join('')
                : `<ul style="margin: 0; padding-left: 20px;">
                    ${stageInfo.risks.map(item => `<li style="margin-bottom: 5px;">${item}</li>`).join('')}
                  </ul>`
              }
            </div>
          </div>
        ` : ''}

        <!-- Сроки -->
        ${stageInfo.timeline ? `
          <div style="margin-bottom: 30px; page-break-inside: avoid;">
            <h2 style="font-size: 18px; margin-bottom: 10px; color: #2563eb;">Сроки реализации</h2>
            <div style="background: #eff6ff; padding: 15px; border-radius: 8px; text-align: center; margin-bottom: 15px;">
              <div style="color: #1e40af; margin-bottom: 5px;">Общий срок:</div>
              <div style="font-size: 24px; font-weight: bold; color: #1e3a8a;">${stageInfo.timeline.total}</div>
            </div>

            ${stageInfo.timeline.presence ? `
              <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <div style="color: #1e40af; margin-bottom: 5px;">Присутствие на объекте:</div>
                <div style="font-weight: 500;">${stageInfo.timeline.presence}</div>
              </div>
            ` : ''}

            ${stageInfo.timeline.frequency ? `
              <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <div style="color: #1e40af; margin-bottom: 5px;">Периодичность:</div>
                <div style="font-weight: 500;">${stageInfo.timeline.frequency}</div>
              </div>
            ` : ''}

            ${stageInfo.timeline.reporting ? `
              <div style="background: #eff6ff; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                <div style="color: #1e40af; margin-bottom: 5px;">Отчетность:</div>
                ${typeof stageInfo.timeline.reporting === 'object' 
                  ? Object.entries(stageInfo.timeline.reporting).map(([period, report]) => `
                      <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="text-transform: capitalize;">${period}</span>
                        <span style="color: #666;">${report}</span>
                      </div>
                    `).join('')
                  : `<div style="font-weight: 500;">${stageInfo.timeline.reporting}</div>`
                }
              </div>
            ` : ''}

            ${stageInfo.timeline.availability ? `
              <div style="background: #eff6ff; padding: 15px; border-radius: 8px;">
                <div style="color: #1e40af; margin-bottom: 5px;">Доступность:</div>
                <div style="font-weight: 500;">${stageInfo.timeline.availability}</div>
              </div>
            ` : ''}
          </div>
        ` : ''}

        <!-- Этика -->
        ${stageInfo.ethics ? `
          <div style="margin-bottom: 30px; page-break-inside: avoid;">
            <h2 style="font-size: 18px; margin-bottom: 10px; color: #7e22ce;">Этика</h2>
            
            <!-- Обязательства исполнителя -->
            <div style="background: #faf5ff; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
              <h3 style="font-size: 16px; color: #6b21a8; margin-bottom: 10px;">Обязательства исполнителя:</h3>
              <ul style="margin: 0; padding-left: 20px;">
                ${stageInfo.ethics.contractor.map(item => `
                  <li style="margin-bottom: 5px;">${item}</li>
                `).join('')}
              </ul>
            </div>

            <!-- Обязательства заказчика -->
            <div style="background: #eef2ff; padding: 15px; border-radius: 8px;">
              <h3 style="font-size: 16px; color: #3730a3; margin-bottom: 10px;">Обязательства заказчика:</h3>
              <ul style="margin: 0; padding-left: 20px;">
                ${stageInfo.ethics.client.map(item => `
                  <li style="margin-bottom: 5px;">${item}</li>
                `).join('')}
              </ul>
            </div>
          </div>
        ` : ''}
      </div>
    `;

    const options = {
      ...pdfOptions,
      filename: `InteriorTerms_v1.0_${stageInfo.id}.pdf`,
      enableLinks: true,
      useSystemFonts: true
    };

    await html2pdf().set(options).from(element).save();
  } catch (error) {
    console.error('Error exporting PDF:', error);
    // Здесь можно добавить уведомление пользователю об ошибке
  }
};

// Экспорт полной матрицы
export const exportFullMatrixToPdf = async () => {
  try {
    const element = document.createElement('div');
    element.innerHTML = `
      <div style="padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="text-align: center; margin-bottom: 20px;">
          InteriorTerms Matrix v1.0
        </h1>

        <!-- Группы этапов -->
        <div style="margin-bottom: 30px;">
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
            <div style="background: #f0fdf4; padding: 16px; border-radius: 8px;">
              <h3 style="color: #166534; margin-bottom: 8px;">Базовое проектирование</h3>
              <p>EBD → EPD → EFD: от эскизного проекта к полной документации</p>
            </div>
            <div style="background: #eff6ff; padding: 16px; border-radius: 8px;">
              <h3 style="color: #1e40af; margin-bottom: 8px;">Проектирование с поддержкой</h3>
              <p>FCA → FCS → FCM: от консультаций к управлению</p>
            </div>
            <div style="background: #f3e8ff; padding: 16px; border-radius: 8px;">
              <h3 style="color: #6b21a8; margin-bottom: 8px;">Строительство</h3>
              <p>CBO → CPT → CIP: от организации к страхованию</p>
            </div>
            <div style="background: #fff7ed; padding: 16px; border-radius: 8px;">
              <h3 style="color: #9a3412; margin-bottom: 8px;">Реализация</h3>
              <p>DAP → DFU → DFP: от черновой до полной реализации</p>
            </div>
          </div>
        </div>

        <!-- Условные обозначения -->
        <div style="margin-bottom: 30px; background: #f8fafc; padding: 16px; border-radius: 8px;">
          <h3 style="margin-bottom: 12px;">Условные обозначения:</h3>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="width: 24px; height: 24px; background: #dcfce7; border: 1px solid #16a34a;"></div>
              <span>И - Исполнитель</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <div style="width: 24px; height: 24px; background: #f1f5f9; border: 1px solid #94a3b8;"></div>
              <span>З - Заказчик</span>
            </div>
          </div>
        </div>

        <!-- Матрица ответственности -->
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
          <thead>
            <tr>
              <th style="border: 1px solid #e2e8f0; padding: 12px; background: #f8fafc; text-align: left;">
                Ответственность
              </th>
              ${[
                { id: 'EBD', subtext: '(Базовый проект)' },
                { id: 'EPD', subtext: '(Рабочий проект)' },
                { id: 'EFD', subtext: '(Полный проект)' },
                { id: 'FCA', subtext: '(Консультации)' },
                { id: 'FCS', subtext: '(Авторский надзор)' },
                { id: 'FCM', subtext: '(Управление)' },
                { id: 'CBO', subtext: '(Организация)' },
                { id: 'CPT', subtext: '(Команда)' },
                { id: 'CIP', subtext: '(Страхование)' },
                { id: 'DAP', subtext: '(До чистовой)' },
                { id: 'DFU', subtext: '(Под ключ)' },
                { id: 'DFP', subtext: '(Полная реализация)' }
              ].map(stage => `
                <th style="border: 1px solid #e2e8f0; padding: 12px; background: #f8fafc; text-align: center;">
                  ${stage.id}<br/>${stage.subtext}
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            ${[
              'Планировочное решение',
              'Визуализация',
              'Рабочая документация',
              'Спецификация материалов',
              'Подбор материалов',
              'Подбор подрядчиков',
              'Составление смет',
              'Авторский надзор',
              'Управление проектом',
              'Подготовительные работы',
              'Строительные работы',
              'Инженерные системы',
              'Отделочные работы',
              'Меблировка',
              'Декорирование'
            ].map((resp, idx) => `
              <tr>
                <td style="border: 1px solid #e2e8f0; padding: 12px;">${resp}</td>
                ${Array(12).fill(null).map((_, i) => `
                  <td style="border: 1px solid #e2e8f0; padding: 12px; text-align: center; ${idx < 2 ? 'background: #dcfce7;' : 'background: #f1f5f9;'}">
                    ${idx < 2 ? 'И' : 'З'}
                  </td>
                `).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    const options = {
      ...pdfOptions,
      filename: 'InteriorTerms_Matrix_v1.0.pdf',
      enableLinks: true,
      useSystemFonts: true
    };

    await html2pdf().set(options).from(element).save();
  } catch (error) {
    console.error('Error exporting matrix PDF:', error);
    // Здесь можно добавить уведомление пользователю об ошибке
  }
}; 